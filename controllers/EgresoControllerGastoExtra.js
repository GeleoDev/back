// EgresoControllerGastoExtra.js

import GastoExtraModel from '../models/GastoExtraModel.js';

export const createGastoExtra = async (req, res) => {
  try {
    const { NombreGasto, Descripcion_Gasto, MontoGasto, Tarjeta } = req.body;
    const newGasto = await GastoExtraModel.create({ NombreGasto, Descripcion_Gasto, MontoGasto, Tarjeta });
    res.json({ message: 'Gasto extra creado correctamente', gasto: newGasto });
  } catch (error) {
    console.error('Error creating gasto extra:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getGastosExtras = async (req, res) => {
  try {
    const gastos = await GastoExtraModel.findAll();
    res.json(gastos);
  } catch (error) {
    console.error('Error fetching gastos extras:', error);
    res.status(500).json({ message: error.message });
  }
};
