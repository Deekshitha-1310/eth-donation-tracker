async function main() {
  const DisasterAid = await ethers.getContractFactory("Disasteraid");
  const disasterAid = await DisasterAid.deploy();
  await disasterAid.deployed();

  console.log("Deployed to:", disasterAid.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
