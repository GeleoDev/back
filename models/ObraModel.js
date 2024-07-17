import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import ClientModel from './ClientModel.js'; // Importa el modelo de cliente

const ObraModel = db.define('obras', {
  Nombre_obra: { type: DataTypes.STRING },
  Descripcion_obra: { type: DataTypes.STRING },
  ClienteID: { type: DataTypes.INTEGER },
  Valor: { type: DataTypes.INTEGER},
  Actividad: { type: DataTypes.BOOLEAN, defaultValue: false},
  Vidrio: { type: DataTypes.BOOLEAN, defaultValue: false },
  Carpinteria: { type: DataTypes.BOOLEAN, defaultValue: false },
  Premarco: { type: DataTypes.BOOLEAN, defaultValue: false },
  Otros: { type: DataTypes.BOOLEAN, defaultValue: false },
  EnCola: { type: DataTypes.BOOLEAN, defaultValue: false },
  EnProgreso: { type: DataTypes.BOOLEAN, defaultValue: false },
  Finalizado: { type: DataTypes.BOOLEAN, defaultValue: false },
  Entregado: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  timestamps: true,
});

// Definir la relación entre las obras y los clientes
ObraModel.belongsTo(ClientModel, { foreignKey: 'ClienteID', as: 'Cliente' });
ClientModel.hasMany(ObraModel, { foreignKey: 'ClienteID' });

export default ObraModel;

