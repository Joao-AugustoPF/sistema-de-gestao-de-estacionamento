// src/models/Veiculo.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Veiculo extends Model {
  public id!: number;
  public placa!: string;
  public tipoVeiculo!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Veiculo.init({
  placa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoVeiculo: {
    type: DataTypes.ENUM('Moto', 'Caminhão', 'Carro'),
    allowNull: false
  }
}, { sequelize, modelName: 'veiculo' });

export default Veiculo;
