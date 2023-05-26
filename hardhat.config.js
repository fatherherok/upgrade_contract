//require("@nomicfoundation/hardhat-toolbox")
const { ethers } = require('ethers')

require("dotenv").config()


// hardhat.config.js
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

require('@openzeppelin/hardhat-upgrades')



task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for(const account of accounts){
    console.log(account.address)
  }
})

// hardhat.config.ts
//import '@openzeppelin/hardhat-upgrades';

/** @type import('hardhat/config').HardhatUserConfig */



const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
     defaultNetwork: "goerli",
    networks: {
        goerli: {
          url: RPC_URL,
          accounts: [PRIVATE_KEY]
        }
    },

  solidity: "0.8.18",
};



// //require("@nomicfoundation/hardhat-toolbox");
// // Go to https://www.alchemyapi.io, sign up, create
// // a new App in its dashboard, and replace "KEY" with its key
// const ALCHEMY_API_KEY = "KEY";

// // Replace this private key with your Goerli account private key
// // To export your private key from Metamask, open Metamask and
// // go to Account Details > Export Private Key
// // Beware: NEVER put real Ether into testing accounts
// const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//       accounts: [GOERLI_PRIVATE_KEY]
//     }
//   }
// };