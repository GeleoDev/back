import ObraModel from "../models/ObraModel.js";
import ClientModel from "../models/ClientModel.js";


// Método para obtener todas las obras con Actividad: false
export const GetInactiveObras = async (req, res) => {
  try {
    const obras = await ObraModel.findAll({
      where: { Actividad: false },
      include: [
        {
          model: ClientModel,
          as: 'Cliente',
          attributes: ['Nombre', 'Apellido']
        }
      ]
    });
    res.json(obras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Método para crear una nueva obra
export const CreateObra = async (req, res) => {
  try {
    const { Nombre_obra, Descripcion_obra, ClienteID, Actividad, Valor } = req.body;
    const newObra = await ObraModel.create({ Nombre_obra, Descripcion_obra, ClienteID, Actividad, Valor });
    res.json({ message: "Obra creada correctamente", obra: newObra });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Método para actualizar la obra
export const UpdateObra = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre_obra, Descripcion_obra, ClienteID, Actividad, Valor } = req.body;
    await ObraModel.update({ Nombre_obra, Descripcion_obra, ClienteID, Actividad, Valor }, { where: { id } });
    res.json({ message: "Obra actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Método para eliminar la obra
export const DeleteObra = async (req, res) => {
  try {
    const { id } = req.params;
    await ObraModel.destroy({ where: { id } });
    res.json({ message: "Obra eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Método para obtener todos los clientes (para el formulario)
export const GetAllClients = async (req, res) => {
  try {
    const clients = await ClientModel.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Obtener todas las obras activas
export const getObrasActivas = async (req, res) => {
  try {
    const obras = await ObraModel.findAll({
      where: { Actividad: true }, // Asegúrate de que esta condición es correcta
      include: [
        {
          model: ClientModel,
          as: 'Cliente',
          attributes: ['Nombre', 'Apellido']
        }
      ]
    });
    res.json(obras);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener todas las obras inactivas
export const getObrasInactivas = async (req, res) => {
  try {
    const obras = await ObraModel.findAll({
      where: { Finalizado: true }, // Condición ajustada según los requisitos
      include: [{ model: ClientModel }]
    });
    res.json(obras);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// controllers/ObraController.js
export const activateObra = async (req, res) => {
  try {
    const obra = await ObraModel.findByPk(req.params.id);
    if (obra) {
      await obra.update({ Actividad: true }); // Asegúrate de que se está actualizando el campo "Actividad"
      res.json({ message: 'Obra activada exitosamente' });
    } else {
      res.status(404).json({ message: 'Obra no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una obra
export const updateObraState = async (req, res) => {
  try {
    const obra = await ObraModel.findByPk(req.params.id);
    if (obra) {
      await obra.update(req.body);
      res.json({ message: 'Obra actualizada exitosamente' });
    } else {
      res.status(404).json({ message: 'Obra no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

