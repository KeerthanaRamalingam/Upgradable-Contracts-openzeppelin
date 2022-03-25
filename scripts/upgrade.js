async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    const ClaimV2 = await ethers.getContractFactory("ClaimV2")
    let box = await upgrades.upgradeProxy("0xD47BF6D46FDbBeafA096EC8fE2E67fD7e8Ca6581", ClaimV2)
    console.log("Your upgraded proxy is done!", box.address)
    console.log(await box.admin());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
