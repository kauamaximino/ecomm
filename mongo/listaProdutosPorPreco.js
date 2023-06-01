use("ecomm");

const listPrices = db.products.find(
  { "PREÇO UNITÁRIO": { $gte: 1000, $lte: 2000 } },
  { "_id": 1, "NOME": 1, "PREÇO UNITÁRIO": 1 }
)

console.log(listPrices)