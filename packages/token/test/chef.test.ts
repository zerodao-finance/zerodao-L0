import * as hre from "hardhat";
import type { DeploymentsExtension } from "hardhat-deploy/types";
import { ethers as _ethers } from "ethers";
import { ZERO, ZeroLock, SZERO } from "../typechain-types";
import { HardhatEthersHelpers } from "hardhat-deploy-ethers/types";
import { toEIP712 } from "../src.ts";
import { mine, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
//@ts-ignore
const ethers: typeof _ethers & HardhatEthersHelpers = hre.ethers;
//@ts-ignore
const deployments: DeploymentsExtension = hre.deployments;

async function makeSigners(n: number = 5) {
  return await Array.from(new Array(n)).reduce(async (d, i) => {
    const arr = await d;
    let wallet = ethers.Wallet.createRandom();
    const [signer] = await ethers.getSigners();
    wallet = wallet.connect(signer.provider);
    await signer.sendTransaction({
      value: ethers.utils.parseEther("2"),
      to: wallet.address,
    });
    const z = (await ethers.getContract("ZERO")) as ZERO;
    z.transfer(wallet.address, ethers.utils.parseEther("5000"));
    arr.push(wallet);
    return arr;
  }, Promise.resolve([]));
}

async function signEIP712({
  signer,
  value,
  zero,
  owner,
  spender,
}: {
  signer: _ethers.Wallet;
  value: _ethers.BigNumber;
  zero: ZERO;
  owner: string;
  spender: string;
}) {
  const payload = toEIP712(zero.address, {
    owner,
    spender,
    deadline: ethers.utils.keccak256(
      ethers.utils.solidityPack(
        ["address", "address", "uint256", "uint256"],
        [owner, spender, value, await zero.nonces(owner)]
      )
    ),
    nonce: await zero.nonces(owner),
    value,
  });
  delete payload.types.EIP712Domain;
  return await signer._signTypedData(
    payload.domain,
    payload.types,
    payload.message
  );
}

describe("sZERO", () => {
  let zero: ZERO, sZero: SZERO;
  beforeEach(async () => {
    await deployments.fixture();
    zero = (await ethers.getContract("ZERO")) as ZERO;
    sZero = (await ethers.getContract("sZERO")) as SZERO;
  });

  it("should check basics", async () => {
    expect(await sZero.name()).to.be.equal("sZERO");
    expect(await sZero.decimals()).to.be.equal(18);
    expect(await sZero.zero()).to.be.equal(
      ethers.utils.getAddress(zero.address)
    );
  });
  it("should check if rewards are being correctly minted and redeemed", async () => {
    const signers = await makeSigners(5);
    const s = signers[0];
    const balance = await zero.balanceOf(s.address);
    const signature = await signEIP712({
      signer: s as any,
      owner: s.address,
      spender: sZero.address,
      value: balance,
      zero,
    });
    let tx = sZero.connect(s).enterStakingWithPermit(balance, signature);
    await expect(tx)
      .to.emit(sZero, "Transfer")
      .withArgs(ethers.constants.AddressZero, s.address, balance);
    await expect(tx)
      .to.emit(zero, "Transfer")
      .withArgs(s.address, sZero.address, balance);
    await mine(5);
    const pending = await sZero.pendingZero(0, s.address);
    expect(pending).to.be.equal(ethers.utils.parseEther("10000"));
    tx = sZero.connect(s).leaveStaking(sZero.balanceOf(s.address));
    await expect(tx)
      .to.emit(zero, "Transfer")
      .withArgs(
        ethers.constants.AddressZero,
        sZero.address,
        ethers.utils.parseEther("12000")
      );
    await expect(tx)
      .to.emit(sZero, "Transfer")
      .withArgs(s.address, ethers.constants.AddressZero, balance);
    expect(await zero.balanceOf(s.address)).to.be.equal(
      ethers.utils.parseEther("17000")
    );
    expect(await sZero.pendingZero(0, s.address)).to.be.equal(0);
    await zero
      .connect(s)
      .approve(sZero.address, ethers.utils.parseEther("5000"));
    await sZero.connect(s).enterStaking(ethers.utils.parseEther("5000"));
    await zero
      .connect(signers[1])
      .approve(sZero.address, ethers.utils.parseEther("5000"));
    await sZero
      .connect(signers[1])
      .enterStaking(ethers.utils.parseEther("5000"));
    // because approve and stake take up one block each
    expect(await sZero.pendingZero(0, s.address)).to.be.equal(
      ethers.utils.parseEther("4000")
    );
    await mine(1);
    // expect
    expect(
      (await sZero.pendingZero(0, s.address)).lt(
        ethers.utils.parseEther("5000")
      )
    ).to.be.equal(true);
    await sZero.connect(s).restake();
    await sZero.connect(signers[1]).restake();
    await mine(1);
    await sZero.connect(s).leaveStaking(await sZero.balanceOf(s.address));
    await sZero
      .connect(signers[1])
      .leaveStaking(await sZero.balanceOf(signers[1].address));
  });
  it("should test governance", async () => {
    const signers = await makeSigners(5);
    const s = signers[0];
    const s2 = signers[1];
    const balance = await zero.balanceOf(s.address);
    const signature2 = await signEIP712({
      signer: s2 as any,
      owner: s2.address,
      spender: sZero.address,
      value: balance,
      zero,
    });
    const signature = await signEIP712({
      signer: s as any,
      owner: s.address,
      spender: sZero.address,
      value: balance,
      zero,
    });
    await sZero.connect(s).enterStakingWithPermit(balance, signature);
    const votes = await sZero.getVotes(s.address);
    expect(votes).to.be.lte(await sZero.balanceOf(s.address));
    await time.increase(1800);
    expect(await sZero.getVotes(s.address)).to.be.lt(
      await sZero.balanceOf(s.address)
    );

    await time.increase(1800);

    expect(await sZero.getVotes(s.address)).to.be.equal(
      await sZero.balanceOf(s.address)
    );
    await sZero.connect(s2).enterStakingWithPermit(balance, signature2);
    expect(await sZero.getVotes(s2.address)).to.be.equal(0);
    await time.increase(1800);
    expect(await sZero.getVotes(s2.address)).to.be.equal(
      (await sZero.balanceOf(s2.address)).div(2)
    );
  });
});
