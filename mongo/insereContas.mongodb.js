use('ecomm')

db.accounts.insertMany([
  {
    "nome": "Roberto",
    "email": "exemplo@exemplo.com",
    "senha": "123456",
    "dataCriacao": new Date(),
    "CPF": "12345678901",
    "telefone": "11912345678",
    "endereco": {
      "bairro": "Jardim Paulista",
      "rua": "Avenida Paulista",
      "numero": "123",
      "CEP": "12345678",
      "cidade": "São Paulo",
      "UF": "SP",
    }
  },
  {
    "nome": "Joaquina",
    "email": "exemplo@exemplo.com",
    "senha": "123456",
    "dataCriacao": new Date(),
    "CPF": "12345678901",
    "telefone": "11912345678",
    "endereco": {
      "bairro": "Pirituba",
      "rua": "Rua dos Bobos",
      "numero": "0",
      "CEP": "12345678",
      "cidade": "São Paulo",
      "UF": "SP",
    }
  },
  {
    "nome": "Silvana",
    "email": "exemplo@exemplo.com",
    "senha": "123456",
    "dataCriacao": new Date(),
    "CPF": "12345678901",
    "telefone": "11912345678",
    "endereco": {
      "bairro": "Pirituba",
      "rua": "Rua dos Bobos",
      "numero": "1",
      "CEP": "12345678",
      "cidade": "São Paulo",
      "UF": "SP",
    }
  }
])
