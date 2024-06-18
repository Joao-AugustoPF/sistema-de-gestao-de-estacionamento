import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: `mysql`,
  logging: true,
});

export default sequelize;
