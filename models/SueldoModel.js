import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const SueldoModel = db.define('sueldos', {
  EmpleadoID: { type: DataTypes.INTEGER },
  MontoSueldo: { type: DataTypes.INTEGER },
  Tarjeta: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
});

export default SueldoModel;
