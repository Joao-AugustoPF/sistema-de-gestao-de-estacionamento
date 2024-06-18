// src/models/Permissao.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Permissao extends Model {
  public id!: number;
  public descricao!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Permissao.init({
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'permissao' });

export default Permissao;
