import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const EmpleadoModel = db.define('empleados', {
  Nombre_Empleado: { type: DataTypes.STRING },
  Apellido_Empleado: { type: DataTypes.STRING },
  Domicilio: { type: DataTypes.STRING },
  Telefono: { type: DataTypes.STRING },
  Documento: { type: DataTypes.STRING },
  Notas_Adicionales: { type: DataTypes.TEXT },
}, {
  timestamps: true,
});

export default EmpleadoModel;
