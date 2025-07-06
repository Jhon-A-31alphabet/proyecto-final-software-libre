const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'estudiantes',
        password:'password',
  port: 5432,
});

module.exports = pool;


