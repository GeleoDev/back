import { Sequelize } from "sequelize";

const db = new Sequelize('bunker_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  await db.authenticate();
  console.log('¡Conexión exitosa a la base de datos!');
} catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}

export default db;
