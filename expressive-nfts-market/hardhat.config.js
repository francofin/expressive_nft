require("@nomiclabs/hardhat-waffle");

const projectIdNumber = procesds.env.PROJECTID
const fs = require('fs');
const keyData = fs.readFileSync(`../server/config/${process.env.PKEY}`, {
  encoding:'utf8', 
  flag:'r'
});
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });




// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork:'hardhat',
  networks:{
    hardhat:{
      //chainID is blockchain ID local 1337
      chainId:1337
    },
    mumbai:{
      //put project id number, last part of this url in an env. Account from which we deploy our projects. Private key from metamask 
      url:`https://polygon-mumbai.infura.io/v3/${projectIdNumber}`,
      accounts:[keyData]
    },
    mainnet:{
      url:`https://mainnet.infura.io/v3/${projectIdNumber}`,
      accounts:[keyData]
    }
  },
  solidity: {
    version:"0.8.4",
    settings:{
      optimizer:{
        enabled:true,
        runs:200
      }
    }
  } //optimizer simplifies complicated expressions, good to add. 
  //need private key, never put it in the project. Add it to server side. 

};
