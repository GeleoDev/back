// EgresoMaterialModel.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import ProveedorModel from './ProveedorModel.js';
import MaterialModel from './MaterialModel.js';

const EgresoMaterialModel = db.define('egreso_material', {
  ProveedorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProveedorModel,
      key: 'id'
    }
  },
  MaterialesID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: MaterialModel,
      key: 'id'
    }
  },
  MontoEgr: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Descripcion_Egreso: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Tarjeta: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

EgresoMaterialModel.belongsTo(ProveedorModel, { foreignKey: 'ProveedorID' });
EgresoMaterialModel.belongsTo(MaterialModel, { foreignKey: 'MaterialesID' });

export default EgresoMaterialModel;
