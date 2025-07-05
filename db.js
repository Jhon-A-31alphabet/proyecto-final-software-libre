const { Pool } = require('pg');

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_basedatos',
  password: 'tu_contraseña',
  port: 5432,
});

module.exports = pool;


