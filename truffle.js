module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777", // match any network id
      from: "0xc9837c1E0df3239C1e6724A96c5491f8232983Fd", // account address from which to deploy
      gas: 6721975,
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
