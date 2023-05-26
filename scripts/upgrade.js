// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = '0x2149788fA1AD7ed30CfDAB825d8ca12E47106588';
 
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  //console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("Your upgraded proxy is done", boxV2Address);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });