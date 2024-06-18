// src/models/Funcionario.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Permissao from './Permissao';

class Funcionario extends Model {
  public id!: number;
  public nome!: string;
  public cpf!: string;
  public cargo!: string;
  public permissaoId!: number;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Funcionario.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  permissaoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Permissao,
      key: 'id'
    },
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'funcionario' });

Funcionario.belongsTo(Permissao, { foreignKey: 'permissaoId' });

export default Funcionario;
