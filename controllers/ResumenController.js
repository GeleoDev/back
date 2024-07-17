import ResumenModel from '../models/ResumenModel.js';

export const createResumen = async (req, res) => {
  const { tipo, descripcion, valor, tarjeta } = req.body;
  try {
    const newResumen = await ResumenModel.create({ tipo, descripcion, valor, tarjeta });
    res.json(newResumen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getResumen = async (req, res) => {
  try {
    const resumen = await ResumenModel.findAll();
    res.json(resumen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
