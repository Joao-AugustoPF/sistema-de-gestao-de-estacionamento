// src/models/Vaga.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import TipoVaga from './TipoVaga';
import Veiculo from './Veiculo';

class Vaga extends Model {
  public id!: number;
  public numero!: number;
  public tipoId!: number;
  public veiculoId!: number;
  public disponivel!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Vaga.init({
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipoId: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoVaga,
      key: 'id'
    },
    allowNull: false
  },
  veiculoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Veiculo,
      key: 'id'
    },
    allowNull: true
  },
  disponivel: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, { sequelize, modelName: 'vaga' });

Vaga.belongsTo(TipoVaga, { foreignKey: 'tipoId' });
Vaga.belongsTo(Veiculo, { foreignKey: 'veiculoId' });

export default Vaga;
