require("dotenv").config();
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LinkDonation", function () {
  it("Should return the initital donation to be 0", async function () {
    const LinkDonation = await ethers.getContractFactory("LinkDonation");
    const linkDonation = await LinkDonation.deploy(process.env.LINK_CONTRACT_ADDRESS);
    await linkDonation.deployed();

    expect(await linkDonation.donated()).to.equal(0);
  });
});
