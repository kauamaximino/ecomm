import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';

const file = fs.readFileSync('./swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
