import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import ProveedorModel from './ProveedorModel.js';

const MaterialModel = db.define('materiales', {
  NombreMaterial: { type: DataTypes.STRING },
  Descripcion_Material: { type: DataTypes.TEXT },
  ProveedorID: { type: DataTypes.INTEGER }
}, {
  timestamps: true,
});

// Definir la relación entre los materiales y los proveedores
MaterialModel.belongsTo(ProveedorModel, { foreignKey: 'ProveedorID', as: 'Proveedor' });
ProveedorModel.hasMany(MaterialModel, { foreignKey: 'ProveedorID' });

export default MaterialModel;
