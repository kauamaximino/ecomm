use("ecomm");

const updateOne = db.categories.updateOne(
  { "nome": "ESPORTE" }, { $set: { "status": "ATIVA" } }
);

console.log(updateOne);