const WoBToken = artifacts.require("./WoBToken.sol");

module.exports = function (deployer) {
  deployer.deploy(WoBToken);
};
