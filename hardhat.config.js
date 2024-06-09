/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL_MAINNET, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {},
    mainnet: {
      url: API_URL_MAINNET,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
