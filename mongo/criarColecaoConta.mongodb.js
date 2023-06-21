use('ecomm')

db.createCollection("accounts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nome",
        "email",
        "senha",
        "dataCriacao",
        "CPF",
        "telefone",
        "endereco"
      ],
      properties: {
        nome: {
          bsonType: "string",
          minLength: 5,
          description: "informe um nome com no mínimo 5 caracteres"
        },
        email: {
          bsonType: "string",
          minLength: 5,
          pattern: "^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$",
          description: "informe um email válido"
        },
        senha: {
          bsonType: "string",
          minLength: 5,
          description: "informe uma senha com no mínimo 5 caracteres"
        },
        dataCriacao: {
          bsonType: "date",
          description: "informe uma data de criação válida"
        },
        CPF: {
          bsonType: "string",
          minLength: 11,
          maxLength: 11,
          description: "informe um CPF válido"
        },
        telefone: {
          bsonType: "string",
          minLength: 10,
        },
        endereco: {
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
      }
    }
  }
})