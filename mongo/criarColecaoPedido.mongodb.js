use('ecomm')

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "datPedido",
        "account",
        "enderecoEntrega",
        "itens",
      ],
      properties: {
        datPedido: {
          bsonType: "date",
          description: "informe uma data válida para o pedido"
        },
        account: {
          bsonType: "object",
          required: [
            "accountId",
            "nome"
          ]
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
          },
          additionalProperties: false
        },
        itens: {
          bsonType: "array",
          required: [
            "productId",
            "quantidade",
            "precoUnitario"
          ],
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
              minimum: 0,
              description: "informe um desconto com valor válido"
            },
            precoUnitario: {
              bsonType: ["decimal", "int"],
              minimum: 0,
              description: "informe um preço unitário com valor válido"
            }
          }
        }
      },
      additionalProperties: false
    }
  }
})