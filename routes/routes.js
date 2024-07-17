import express from 'express';
import {
  CreateClient, DeleteClient, GetAllClients, GetClient, UpdateClient 
} from '../controllers/ClientController.js';
import {
  CreateObra, GetInactiveObras, UpdateObra, DeleteObra, GetAllClients as GetAllClientsForObra,
  getObrasActivas, activateObra, updateObraState 
} from '../controllers/ObraController.js';
import {
  GetAllProveedores, GetProveedor, CreateProveedor, UpdateProveedor, DeleteProveedor 
} from '../controllers/ProveedorController.js';
import {
  GetAllEmpleados, GetEmpleado, CreateEmpleado, UpdateEmpleado, DeleteEmpleado
} from '../controllers/EmpleadoController.js';
import { getIngresos, createIngreso } from '../controllers/IngresoController.js';
import { getEgresoMateriales, createEgresoMaterial } from '../controllers/EgresoMaterialController.js';
import { getEgresoSueldos, createEgresoSueldo } from '../controllers/EgresoSueldoController.js';
import { getGastosExtras, createGastoExtra } from '../controllers/GastoExtraController.js';
import { getServicios, createServicio } from '../controllers/ServicioController.js';
import { createResumen, getResumen } from '../controllers/ResumenController.js';


const router = express.Router();

// Rutas para clientes
router.get('/clients', GetAllClients);
router.get('/clients/:id', GetClient);
router.post('/clients', CreateClient);
router.put('/clients/:id', UpdateClient);
router.delete('/clients/:id', DeleteClient);

// Rutas para obras
router.get('/obras/inactive', GetInactiveObras);
router.post('/obras', CreateObra);
router.put('/obras/:id', UpdateObra);
router.delete('/obras/:id', DeleteObra);
router.get('/obras/clients', GetAllClientsForObra);
router.get('/obras/activas', getObrasActivas);
router.put('/obras/activar/:id', activateObra);
router.put('/obras/estado/:id', updateObraState);

// Rutas para proveedores
router.get('/proveedores', GetAllProveedores);
router.get('/proveedores/:id', GetProveedor);
router.post('/proveedores', CreateProveedor);
router.put('/proveedores/:id', UpdateProveedor);
router.delete('/proveedores/:id', DeleteProveedor);

// Rutas para empleados
router.get('/empleados', GetAllEmpleados);
router.get('/empleados/:id', GetEmpleado);
router.post('/empleados', CreateEmpleado);
router.put('/empleados/:id', UpdateEmpleado);
router.delete('/empleados/:id', DeleteEmpleado);

// Rutas para ingresos
router.get('/api/ingresos', getIngresos);
router.post('/api/ingresos', createIngreso);

// Rutas para egresos de materiales
router.get('/api/egreso_material', getEgresoMateriales);
router.post('/api/egreso_material', createEgresoMaterial);

// Rutas para egresos de sueldos
router.get('/api/egreso_sueldo', getEgresoSueldos);
router.post('/api/egreso_sueldo', createEgresoSueldo);

// Rutas para gastos extra
router.get('/api/gastos_extra', getGastosExtras);
router.post('/api/gastos_extra', createGastoExtra);

// Rutas para servicios
router.get('/api/servicios', getServicios);
router.post('/api/servicios', createServicio);

router.get('/api/ingresos', getIngresos);
router.get('/api/egreso_material', getEgresoMateriales);
router.get('/api/egreso_sueldo', getEgresoSueldos);
router.get('/api/gastos_extra', getGastosExtras);
router.get('/api/servicios', getServicios);

// Rutas para resumen
router.post('/api/resumen', createResumen);
router.get('/api/resumen', getResumen);


export default router;
