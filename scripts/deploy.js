async function main() {
    const RentSystem = await ethers.getContractFactory("RentPaymentSystem");
 
    // Start deployment, returning a promise that resolves to a contract object
    const rent_system = await RentSystem.deploy();
    console.log("Contract deployed to address:", rent_system.address);
}
 
main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
