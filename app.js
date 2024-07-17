import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/routes.js';
import bodyParser from 'body-parser';

// Importar todos los modelos para sincronización
import './models/ClientModel.js';
import './models/EmpleadoModel.js';
import './models/IngresoModel.js';
import './models/ObraModel.js';
import './models/ProveedorModel.js';
import './models/EgresoProveedorModel.js';
import './models/EgresoSueldoModel.js';
import './models/GastoExtraModel.js';
import './models/ServicioModel.js';
import './models/SueldoModel.js';
import './models/MaterialModel.js';
import './models/ResumenModel.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

try {
  await db.authenticate();
  await db.sync();
  console.log('¡Conexión exitosa a la base de datos!');
} catch (error) {
  console.log('No se pudo conectar a la base de datos', error);
}

app.listen(3300, () => {
  console.log('Servidor corriendo en http://localhost:3300/');
});
