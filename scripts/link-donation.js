require("dotenv").config();
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const LinkDonation = await hre.ethers.getContractFactory("LinkDonation");
  const linkDonation = await LinkDonation.deploy(
    process.env.LINK_CONTRACT_ADDRESS
  );

  await linkDonation.deployed();

  console.log("LinkDonation deployed to:", linkDonation.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
