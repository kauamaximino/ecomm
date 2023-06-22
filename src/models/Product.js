import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: { type: String },
  nome: {
    type: String,
    minLength: 4,
    required: true,
    match: /^[^0-9].*/,
  },
  slug: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9-]*$/,
  },
  preco_unitario: {
    type: mongoose.Types.Decimal128,
    required: true,
    validate: {
      validator(value) {
        return value >= 0;
      },
      message: 'O preço unitário deve ser maior ou igual a zero',
    },
  },
  estoque: {
    type: Number,
    integer: true,
    validate: {
      validator(value) {
        return value >= 0 && value < 10000;
      },
      message: 'O estoque deve ser igual ou maior a 0 e menor que 10000',
    },
  },
});

const products = mongoose.model('products', ProductSchema);

export default products;
