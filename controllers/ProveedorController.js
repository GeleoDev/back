import ProveedorModel from "../models/ProveedorModel.js";

// Obtener todos los proveedores
export const GetAllProveedores = async (req, res) => {
  try {
    const proveedores = await ProveedorModel.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un proveedor por ID
export const GetProveedor = async (req, res) => {
  try {
    const proveedor = await ProveedorModel.findOne({
      where: { id: req.params.id }
    });
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo proveedor
export const CreateProveedor = async (req, res) => {
  try {
    const newProveedor = await ProveedorModel.create(req.body);
    res.json({ message: "Proveedor creado correctamente", proveedor: newProveedor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un proveedor
export const UpdateProveedor = async (req, res) => {
  try {
    await ProveedorModel.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: "Proveedor actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un proveedor
export const DeleteProveedor = async (req, res) => {
  try {
    await ProveedorModel.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: "Proveedor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
