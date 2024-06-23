import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Veiculo extends Model {
  public id!: number;
  public placa!: string;
  public tipoVeiculo!: string;
  public modelo!: string;
  public marca!: string;
  public cor!: string;
  public ano!: number;
  public proprietario!: string;
  public telefone_proprietario!: string;

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
  },
  modelo: {
    type: DataTypes.STRING,
  },
  marca: {
    type: DataTypes.STRING,
  },
  cor: {
    type: DataTypes.STRING,
  },
  ano: {
    type: DataTypes.INTEGER,
  },
  proprietario: {
    type: DataTypes.STRING,
  },
  telefone_proprietario: {
    type: DataTypes.STRING,
  }
}, { sequelize, modelName: 'veiculo' });

export default Veiculo;
