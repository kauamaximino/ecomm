use("ecomm");

const resetCategories = db.products.updateMany(
  { "CATEGORIA": "LIVROS" }, { $set: { "QUANTIDADE EM ESTOQUE": 0 } }
)

console.log(resetCategories)