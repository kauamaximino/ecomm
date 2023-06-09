use('ecomm')

db.products.updateOne(
  { NOME: "Galaxy Tab S8" },
  {"QUANTIDADE EM ESTOQUE": {$gte: 2}},
  { $inc: { "QUANTIDADE EM ESTOQUE": -2 } }
);

// db.products.find(
//   { "NOME": "Galaxy Tab S8" },
//   { _id: 0, NOME: 1, "QUANTIDADE EM ESTOQUE": 1 }
// );