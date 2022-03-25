// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0xD47BF6D46FDbBeafA096EC8fE2E67fD7e8Ca6581'
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    const ClaimV2 = await ethers.getContractFactory("ClaimV2")
    console.log("Preparing upgrade...")
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, ClaimV2)
    console.log("BoxV2 at:", boxV2Address);
    console.log("BoxV2 at:", await boxV2Address.admin())
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
