import EgresoSueldoModel from '../models/EgresoSueldoModel.js';
import EmpleadoModel from '../models/EmpleadoModel.js';

export const createEgresoSueldo = async (req, res) => {
  try {
    const { EmpleadoID, MontoSueldo, Tarjeta } = req.body;
    const newEgreso = await EgresoSueldoModel.create({ EmpleadoID, MontoSueldo, Tarjeta });
    res.json({ message: 'Egreso de sueldo creado correctamente', egreso: newEgreso });
  } catch (error) {
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
    res.status(500).json({ message: error.message });
  }
};
