import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  id: { type: String },
  nome: {
    type: String,
    minLength: 4,
    required: true,
    match: /^[^0-9].*/,
  },
  status: {
    type: String,
    enum: ['ATIVO', 'INATIVO'],
    required: true,
  },
});

const categories = mongoose.model('categories', CategorySchema);

export default categories;
