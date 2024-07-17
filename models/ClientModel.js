import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ClientModel = db.define('clientes', {
  Nombre: { type: DataTypes.STRING },
  Apellido: { type: DataTypes.STRING },
  Direccion: { type: DataTypes.STRING },
  Documento: { type: DataTypes.STRING },
  Telefono: { type: DataTypes.STRING }
});

export default ClientModel;
