module.exports = {
  network: {
    developement: {
      host: "localhost"
      ,port: 8545
      ,network_id: "*"
    }
    ,production: {
      host: "herodp7egjw2.eastus.cloudapp.azure.com"
      , port: 8545
      , network_id: "*"
      , gas: 300000
    }
  }
}
