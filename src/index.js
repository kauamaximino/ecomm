import mongoose from 'mongoose';
import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());

routes(app);

const port = 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB', err));
