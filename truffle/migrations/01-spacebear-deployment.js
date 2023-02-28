const Spacebear = artifacts.require("Spacebear");

module.exports = function(deployer, network, accounts){
    deployer.deploy(Spacebear, {from: accounts[0]});
}