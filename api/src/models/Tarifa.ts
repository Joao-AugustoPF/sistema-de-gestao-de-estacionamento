import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import TipoVaga from './TipoVaga';

class Tarifa extends Model {
  public id!: number;
  public tipoId!: number;
  public valorPorHora!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Tarifa.init({
  tipoId: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoVaga,
      key: 'id'
    },
    allowNull: false
  },
  valorPorHora: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, { sequelize, modelName: 'tarifa' });

Tarifa.belongsTo(TipoVaga, { foreignKey: 'tipoId' });

export default Tarifa;
