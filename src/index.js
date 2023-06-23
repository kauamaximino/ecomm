import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

routes(app);

app.listen(process.env.PORT, () => console.log(
  `Servidor rodando na porta ${process.env.PORT}`,
));

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/ecomm?authSource=admin
`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB', err));
