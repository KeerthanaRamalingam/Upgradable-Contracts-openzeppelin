require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require('@openzeppelin/hardhat-upgrades')
require("@nomiclabs/hardhat-etherscan")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const RINKEBY_RPC_URL = "https://rinkeby.infura.io/v3/8eae6474238c42a793db4f5816d6d203";
const MUMBAI_RPC_URL = "https://rpc-mumbai.maticvigil.com"
  // const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
  // const MNEMONIC = process.env.MNEMONIC || "your mnemonic"
  // const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
  // optional
  // const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key"

  module.exports = {
    defaultNetwork: "hardhat",
    networks: {
      hardhat: {
      },
      local: {
        url: 'http://127.0.0.1:8545/'
      },
      rinkeby: {
        url: RINKEBY_RPC_URL,
        accounts: ["3a0fa4e862b421c4a6ee23c86dc9c3cedc13f431e9c5ee40266ffd4d44138c8c"],
        // accounts: {
        //   mnemonic: MNEMONIC,
        // },
        saveDeployments: true,
      },
      mumbai: {
        url: MUMBAI_RPC_URL,
        accounts: ["3a0fa4e862b421c4a6ee23c86dc9c3cedc13f431e9c5ee40266ffd4d44138c8c"],
        // accounts: {
        //   mnemonic: MNEMONIC,
        // },
        saveDeployments: true,
      },
    },
    solidity: "0.8.2",
    namedAccounts: {
      deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      },
      feeCollector: {
        default: 1
      }
    },
    // etherscan: {
    //   // Your API key for Etherscan
    //   // Obtain one at https://etherscan.io/
    //   apiKey: ETHERSCAN_API_KEY
    // },
  }

