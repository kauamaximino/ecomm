use("ecomm");

const listProductsByCategories = db.products.find({
  "CATEGORIA": {$in: ["LIVROS", "CELULARES"]}
})

console.log(listProductsByCategories)