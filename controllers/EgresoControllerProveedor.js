import EgresoProveedorModel from '../models/EgresoProveedorModel.js';

export const GetAllEgresosProveedor = async (req, res) => {
  try {
    const egresos = await EgresoProveedorModel.findAll();
    res.json(egresos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};