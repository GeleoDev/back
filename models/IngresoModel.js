import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import ClientModel from './ClientModel.js'; // Correcta importación
import ObraModel from './ObraModel.js';

const IngresoModel = db.define('ingresos', {
  ClienteID: { type: DataTypes.INTEGER },
  ObraID: { type: DataTypes.INTEGER },
  MontoIng: { type: DataTypes.INTEGER },
  Tarjeta: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
});

IngresoModel.belongsTo(ClientModel, { foreignKey: 'ClienteID' });
IngresoModel.belongsTo(ObraModel, { foreignKey: 'ObraID' });

export default IngresoModel;
