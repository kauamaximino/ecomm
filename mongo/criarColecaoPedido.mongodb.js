use('ecomm')

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: [
        "dataPedido",
        "account",
        "enderecoEntrega",
        "itens",
      ],
      properties: {
        dataPedido: {
          bsonType: "date",
          description: "informe uma data válida para o pedido"
        },
        account: {
          bsonType: "object",
          description: "informe uma conta válida",
          properties: {
            accountId: {
              bsonType: "objectId"
            },
            nome: {
              bsonType: "string",
              minLength: 5
            }
          }
        },
        enderecoEntrega: {
          bsonType: "object",
          required: [
            "bairro",
            "rua",
            "numero",
            "CEP",
            "cidade",
            "UF"
          ],
          description: "informe um endereço de entrega válido",
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
              description: "informe um bairro válido"
            },
            rua: {
              bsonType: "string",
              minLength: 1,
              description: "informe uma rua válida"
            },
            numero: {
              bsonType: "string",
              minLength: 1,
              description: "informe um número válido"
            },
            complemento: {
              bsonType: "string",
            },
            CEP: {
              bsonType: "string",
              minLength: 8,
              maxLength: 8,
              description: "informe um CEP válido"
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
              description: "informe uma cidade válida"
            },
            UF: {
              bsonType: "string",
              minLength: 2,
              maxLength: 2,
              description: "informe uma UF válida"
            }
          }
        },
        itens: {
          bsonType: "array",
          required: [
            "productId",
            "quantidade",
            "precoUnitario"
          ],
          description: "informe um item válido",
          properties: {
            productId: {
              bsonType: "objectId",
              description: "informe um id de produto válido"
            },
            quantidade: {
              bsonType: "int",
              minimum: 1,
              description: "informe uma quantidade válida"
            },
            desconto: {
              bsonType: ["decimal", "int"],
              minimum: 0
            },
            precoUnitario: {
              bsonType: ["decimal", "int"],
              minimum: 0,
              description: "informe um preço unitário com valor válido"
            }
          }
        }
      }
    }
  }
})