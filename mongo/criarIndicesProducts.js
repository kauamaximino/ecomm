use("ecomm");

const createIndex = db.products.createIndex({ 'NOME': 1, 'CATEGORIA': 1 })

console.log(createIndex)