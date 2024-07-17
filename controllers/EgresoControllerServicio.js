// EgresoControllerServicio.js

import ServicioModel from '../models/ServicioModel.js';

export const createServicio = async (req, res) => {
  try {
    const { NombreServicio, Descripcion_Servicio, MontoServicio, Tarjeta } = req.body;
    const newServicio = await ServicioModel.create({ NombreServicio, Descripcion_Servicio, MontoServicio, Tarjeta });
    res.json({ message: 'Servicio creado correctamente', servicio: newServicio });
  } catch (error) {
    console.error('Error creating servicio:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getServicios = async (req, res) => {
  try {
    const servicios = await ServicioModel.findAll();
    res.json(servicios);
  } catch (error) {
    console.error('Error fetching servicios:', error);
    res.status(500).json({ message: error.message });
  }
};
