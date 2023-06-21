use('ecomm')

db.orders.insertMany([
  {
    "dataPedido": new Date(),
    "account": {
      "accountId": ObjectId("648109dc1828ed9fc8acf797"),
      "nome": "Roberto"
    },
    "enderecoEntrega": {
      "bairro": "Jardim Paulista",
      "rua": "Avenida Paulista",
      "numero": "123",
      "CEP": "12345678",
      "cidade": "São Paulo",
      "UF": "SP"
    },
    "itens": [
      {
        "produtoId": ObjectId("6478d6a9b8cc580e75fc63d3"),
        "quantidade": 1,
        "precoUnitario": 3523
      }
    ]
  },
  {
    "dataPedido": new Date(),
    "account": {
      "accountId": ObjectId("648109dc1828ed9fc8acf798"),
      "nome": "Joaquina"
    },
    "enderecoEntrega": {
      "bairro": "Pirituba",
      "rua": "Rua dos Bobos",
      "numero": "0",
      "CEP": "12345678",
      "cidade": "São Paulo",
      "UF": "SP"
    },
    "itens": [
      {
        "produtoId": ObjectId("6478d6a9b8cc580e75fc63d4"),
        "quantidade": 1,
        "precoUnitario": 2500
      }
    ]
  }
])