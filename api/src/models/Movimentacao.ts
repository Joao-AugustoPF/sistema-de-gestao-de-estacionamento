// src/models/Movimentacao.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Vaga from './Vaga';
import Veiculo from './Veiculo';
import Pagamento from './Pagamento';

class Movimentacao extends Model {
  public id!: number;
  public vagaId!: number;
  public veiculoId!: number;
  public pagamentoId!: number;
  public entrada!: Date;
  public saida!: Date | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Movimentacao.init({
  vagaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Vaga,
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
    allowNull: false
  },
  pagamentoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Pagamento,
      key: 'id'
    },
    allowNull: false
  },
  entrada: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  saida: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, { sequelize, modelName: 'movimentacao' });

Movimentacao.belongsTo(Vaga, { foreignKey: 'vagaId' });
Movimentacao.belongsTo(Veiculo, { foreignKey: 'veiculoId' });
Movimentacao.belongsTo(Pagamento, { foreignKey: 'pagamentoId' });

export default Movimentacao;
