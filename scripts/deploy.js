const { ethers } = require('hardhat');

async function main() {
  // Compile the contract
  const MyContract = await ethers.getContractFactory('SimpleContract');
  console.log('Compiling contract...');

  // Deploy the contract
  const myContract = await MyContract.deploy();
  console.log('Deploying contract...');

  // Wait for the contract to be mined and get the deployed address
  await myContract.deployed();
  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
