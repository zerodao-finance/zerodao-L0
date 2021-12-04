import { Wallet } from 'ethers';
const { ethers } = require('hardhat');
const { TrivialUnderwriterTransferRequest } = require('../lib/zero');
const { createZeroConnection, createZeroKeeper } = require('../lib/zero');
const TrivialUnderwriter = require('../deployments/arbitrum/TrivialUnderwriter');
const trivial = new ethers.Contract(TrivialUnderwriter.address, TrivialUnderwriter.abi, new ethers.providers.InfuraProvider('mainnet'));


/*--------------------------- ENVIRONMENT VARIABLES -------------------------*/

// WALLET: The private key of the wallet to use.

//--------------------------------- CONSTANTS -------------------------------*/

// The number of confirmations at which to execute the loan
const LOAN_CONFIRMATION = 1

// Address of RenBTC. Used for balance check.
const RENBTC_ADDRESS = '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501'

const MAX_AMOUNT = 50000000;

// URL of P2P network to use. DON'T MODIFY unless you know what you're doing...
const KEEPER_URL = '/dns4/lourdehaufen.dynv6.net/tcp/443/wss/p2p-webrtc-star/'

const CONTROLLER = '0x53f38bEA30fE6919e0475Fe57C2629f3D3754d1E'

//-----------------------------------------------------------------------------

const executeLoan = async (transferRequest) => {
    const [signer] = await ethers.getSigners();
    const wallet = new Wallet(process.env.WALLET, signer.provider);

    const loan = await transferRequest.loan(wallet);
    await loan.wait();

    await transferRequest.waitForSignature();

    const repay = await transferRequest.repay(wallet, { gasLimit: 500e3 });
    await repay.wait();
}

const hasEnough = async (transferRequest) => {
    const [signer] = await ethers.getSigners();
    const wallet = new Wallet(process.env.WALLET, signer);

    const balance = await (new Contract(await underwriter.controller(), ['function balanceOf(address _owner) returns (uint256 balance)'], signer)).balanceOf(wallet.address);
    return balance > transferRequest.amount
}

const handleTransferRequest = async (message) => {
    try {
        const transferRequest = new TrivialUnderwriterTransferRequest({ ...message, chainId: 42161, contractAddress: CONTROLLER });
        transferRequest.setUnderwriter(trivial.address);

        //if (!(hasEnough(transferRequest))) return;
        console.log("Submitting to renVM...")
        const mint = await transferRequest.submitToRenVM();
        console.log("Successfully submitted to renVM.")
        console.log("Gateway address is", await transferRequest.toGatewayAddress())
        console.log("RECEIVED TRANSFER REQUEST", message);
        console.log("RECEIVED TRANSFER REQUEST", transferRequest);
        await new Promise((resolve, reject) => mint.on('deposit', async (deposit) => {
            console.log("Deposit received.")
            await resolve();
            const hash = deposit.txHash();
            const depositLog = (msg) => console.log(`RenVM Hash: ${hash}\nStatus: ${deposit.status}\n${msg}`);

            await deposit.confirmed()
                .on('target', (target) => {
                    depositLog(`0/${target} confirmations`);
                })
                .on('confirmation', async (confs, target) => {
                    depositLog(`${confs}/${target} confirmations`);
                    if (confs == LOAN_CONFIRMATION) {
                        await executeLoan(transferRequest);
                    }
                });

            await deposit.signed().on('status', (status) => {
                depositLog(`Status: ${status}`);
            });
        }));
    } catch (e) {
        console.log(e);
    }
}

const run = async () => {
    // Initialize the keeper
    const keeper = createZeroKeeper(
        await createZeroConnection(KEEPER_URL)
    )
    await keeper.setTxDispatcher(handleTransferRequest);
    await keeper.conn.start();
    await keeper.advertiseAsKeeper();


}

run();
