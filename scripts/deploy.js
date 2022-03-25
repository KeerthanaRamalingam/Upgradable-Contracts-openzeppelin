const { ethers } = require("hardhat")

async function main() {
    const Box = await ethers.getContractFactory("Box")
    // console.log(Box);
    const Claim = await ethers.getContractFactory("Claim")
    console.log("Deploying claim, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Claim, { initializer: 'initialize' })
    console.log("Proxy of Box deployed to:", proxy.address)
    console.log(await proxy.admin());

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
