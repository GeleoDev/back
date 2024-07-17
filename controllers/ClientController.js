// ClientController.js

// importamos el Modelo
import ClientModel from "../models/ClientModel.js";

// Métodos para el CRUD

// Mostrar todos los registros 
export const GetAllClients = async (req, res) => {
  try {
    const Clientes = await ClientModel.findAll();
    res.json(Clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Mostrar un registro
export const GetClient = async (req, res) => {
  try {
    const Cliente = await ClientModel.findOne({
      where: { id: req.params.id }
    });
    res.json(Cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Crear un registro
export const CreateClient = async (req, res) => {
  try {
    console.log('Datos recibidos en el servidor:', req.body); // Log para verificar los datos recibidos
    const { Nombre, Apellido, Direccion, Telefono, Documento } = req.body;
    const newClient = await ClientModel.create({ Nombre, Apellido, Direccion, Telefono, Documento });
    res.json({ message: "Cliente creado correctamente", client: newClient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un registro
export const UpdateClient = async (req, res) => {
  try {
    await ClientModel.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ "message": "¡Se actualizó el registro con éxito!" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Eliminar un registro
export const DeleteClient = async (req, res) => {
  try {
    await ClientModel.destroy({
      where: { id: req.params.id }
    });
    res.json({ "message": "¡Se eliminó correctamente el cliente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
}




