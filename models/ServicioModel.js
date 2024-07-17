import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const ServicioModel = db.define('servicios', {
  NombreServicio: { type: DataTypes.STRING },
  Descripcion_Servicio: { type: DataTypes.TEXT },
  MontoServicio: { type: DataTypes.INTEGER },
  Tarjeta: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
});

export default ServicioModel;
