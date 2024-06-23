import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Pagamento extends Model {
  public id!: number;
  public movimentacaoId!: number;
  public metodoPagamento!: string;
  public valorPago!: number;
  public dataPagamento!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pagamento.init({
  movimentacaoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  metodoPagamento: {
    type: DataTypes.ENUM('Cartão', 'Dinheiro', 'Pix'),
    allowNull: false
  },
  valorPago: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  dataPagamento: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, { sequelize, modelName: 'pagamento' });

export default Pagamento;
