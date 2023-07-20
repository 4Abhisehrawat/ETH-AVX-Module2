require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4", // replace with your Solidity version
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};
