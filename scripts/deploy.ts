import { ethers, upgrades } from "hardhat";

async function main() {
  const PiPiDog = await ethers.getContractFactory("PiPiDog");
  const instance = await upgrades.deployProxy(PiPiDog);
  await instance.deployed();

  console.log(`PiPiDog deployed to ${instance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
