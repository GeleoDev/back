// EgresoMaterialController.js
import EgresoProveedorModel from '../models/EgresoProveedorModel.js';
import ProveedorModel from '../models/ProveedorModel.js';
import MaterialModel from '../models/MaterialModel.js';

export const createEgresoMaterial = async (req, res) => {
  try {
    const { ProveedorID, MaterialesID, MontoEgr, Descripcion_Egreso, Tarjeta } = req.body;
    const newEgreso = await EgresoProveedorModel.create({ ProveedorID, MaterialesID, MontoEgr, Descripcion_Egreso, Tarjeta });
    res.json({ message: 'Egreso de material creado correctamente', egreso: newEgreso });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEgresoMateriales = async (req, res) => {
  try {
    const egresos = await EgresoProveedorModel.findAll({
      include: [
        { model: ProveedorModel, attributes: ['Nombre', 'Apellido'] },
        { model: MaterialModel, attributes: ['NombreMaterial'] }
      ]
    });
    res.json(egresos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};