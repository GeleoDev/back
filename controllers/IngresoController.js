import IngresoModel from '../models/IngresoModel.js';
import ClientModel from '../models/ClientModel.js';
import ObraModel from '../models/ObraModel.js';

export const createIngreso = async (req, res) => {
  try {
    const { ClienteID, ObraID, MontoIng, Tarjeta } = req.body;
    const newIngreso = await IngresoModel.create({ ClienteID, ObraID, MontoIng, Tarjeta });
    res.json({ message: 'Ingreso creado correctamente', ingreso: newIngreso });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIngresos = async (req, res) => {
  try {
    const ingresos = await IngresoModel.findAll({
      include: [
        { model: ClientModel, attributes: ['Nombre', 'Apellido'] },
        { model: ObraModel, attributes: ['Nombre_obra'] }
      ]
    });
    res.json(ingresos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
