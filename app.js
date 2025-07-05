
const express = require('express');
const app = express();
const pool = require('./db');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Obtener todos los estudiantes
app.get('/estudiantes', async (req, res) => {
  const resultado = await pool.query('SELECT * FROM estudiantes ORDER BY id');
  res.json(resultado.rows);
});

// Agregar nuevo estudiante
app.post('/estudiantes', async (req, res) => {
  const { nombre, clase } = req.body;
  await pool.query('INSERT INTO estudiantes (nombre, clase) VALUES ($1, $2)', [nombre, clase]);
  res.sendStatus(201);
});

// Actualizar estudiante
app.put('/estudiantes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, clase } = req.body;
  await pool.query('UPDATE estudiantes SET nombre = $1, clase = $2 WHERE id = $3', [nombre, clase, id]);
  res.sendStatus(200);
});

// Eliminar estudiante
app.delete('/estudiantes/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM estudiantes WHERE id = $1', [id]);
  res.sendStatus(200);
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
