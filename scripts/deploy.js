const hre = require("hardhat");

async function main() {
  
  const Chapati = await hre.ethers.getContractFactory("Chapati");
  const chapati = await Meme.deploy();
  await chapati.deployed();
  await chapati.addLiquidity();
  console.log(
    `Chapati deployed to: ${chapati.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
