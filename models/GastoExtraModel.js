import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const GastoExtraModel = db.define('gastosextra', {
  NombreGasto: { type: DataTypes.STRING },
  Descripcion_Gasto: { type: DataTypes.TEXT },
  MontoGasto: { type: DataTypes.INTEGER },
  Tarjeta: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
});

export default GastoExtraModel;
