// src/models/TipoVaga.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class TipoVaga extends Model {
  public id!: number;
  public descricao!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TipoVaga.init({
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'tipoVaga' });

export default TipoVaga;
