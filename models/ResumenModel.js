import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import ResumenModal from '../../bunker/src/Componentes/ResumenModal.js';

const ResumenModel = db.define('resumen', {
  tipo: {
    type: DataTypes.ENUM('INGRESO', 'MATERIALES', 'SUELDOS', 'GASTOS EXTRAS', 'SERVICIOS'),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tarjeta: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: resumen,
  timestamps: false
});

export default ResumenModel;
