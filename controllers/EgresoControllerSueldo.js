// EgresoControllerSueldo.js

import EgresoSueldoModel from '../models/EgresoSueldoModel.js';
import EmpleadoModel from '../models/EmpleadoModel.js';

export const createEgresoSueldo = async (req, res) => {
  try {
    const { EmpleadoID, MontoSueldo, Tarjeta } = req.body;
    const newEgreso = await EgresoSueldoModel.create({ EmpleadoID, MontoSueldo, Tarjeta });
    res.json({ message: 'Egreso de sueldo creado correctamente', egreso: newEgreso });
  } catch (error) {
    console.error('Error creating egreso sueldo:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getEgresoSueldos = async (req, res) => {
  try {
    const egresos = await EgresoSueldoModel.findAll({
      include: [
        { model: EmpleadoModel, attributes: ['NombreEmp'] }
      ]
    });
    res.json(egresos);
  } catch (error) {
    console.error('Error fetching egreso sueldos:', error);
    res.status(500).json({ message: error.message });
  }
};
