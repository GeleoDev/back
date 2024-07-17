import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProveedorModel = db.define('proveedors', {
  nombre_prov: { type: DataTypes.STRING },
  apellido_prov: { type: DataTypes.STRING },
  direccion_prov: { type: DataTypes.STRING },
  telefono_prov: { type: DataTypes.STRING },
  documento_prov: { type: DataTypes.STRING },
  descripcion_prov: { type: DataTypes.TEXT },
}, {
  timestamps: true,
});

export default ProveedorModel;
