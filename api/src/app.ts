import express, { NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/apiRouter'
import authRoutes from './routes/authRoutes';
import sequelize from './database';
import passport from '../config/passport';
import { createDefaultFuncionario } from './utils/seedDatabse';
import cors from 'cors'


const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
};


app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors(corsOptions));
app.use(cookieParser());


app.use('/auth', authRoutes);

app.use('/api', apiRouter)

const PORT = 4000;

sequelize.sync() // CUIDADO: `force: true`
  .then(async () => {
    await createDefaultFuncionario();
    console.log('Tabelas criadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar tabelas:', error);
  });

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });
