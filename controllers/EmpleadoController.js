import EmpleadoModel from '../models/EmpleadoModel.js';

// Obtener todos los empleados
export const GetAllEmpleados = async (req, res) => {
  try {
    const empleados = await EmpleadoModel.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un empleado
export const GetEmpleado = async (req, res) => {
  try {
    const empleado = await EmpleadoModel.findOne({
      where: { id: req.params.id }
    });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un empleado
export const CreateEmpleado = async (req, res) => {
  try {
    const newEmpleado = await EmpleadoModel.create(req.body);
    res.json({ message: 'Empleado creado correctamente', empleado: newEmpleado });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un empleado
export const UpdateEmpleado = async (req, res) => {
  try {
    await EmpleadoModel.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: '¡Empleado actualizado con éxito!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un empleado
export const DeleteEmpleado = async (req, res) => {
  try {
    await EmpleadoModel.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: '¡Empleado eliminado correctamente!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
