require('@nomiclabs/hardhat-ethers');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
//require('hardhat-gas-reporter');
require('@openzeppelin/hardhat-upgrades');



module.exports = {
  solidity: {
    compilers: [{
      version: '0.5.16',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }, {
      version: '0.6.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }, {
      version: '0.7.6',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }]
  },
  namedAccounts: { deployer: 0 },
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-mainnet.alchemyapi.io/v2/opf1pfLThCfvgyUtE9Mj_NvZwY3yIVJx'
      }
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com"
    },
    localhost: {
      url: 'http://localhost:8545',
      chainId: 1337
    }
  },
  mocha: {
    timeout: 0,
    grep: process.env.GREP
  }
}
