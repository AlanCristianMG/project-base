const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const app = express();
const tabla = 'users';

// Configuración de CORS
const allowedOrigins = ['http://localhost:3000', 'http://localhost:4430/login','http://localhost:3001'];
app.use(cors({
  origin: function (origin, callback) {
    // Verifica si el origen de la solicitud está en la lista de origenes permitidos
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Permite la solicitud
    } else {
      callback(new Error('Not allowed by CORS')); // Rechaza la solicitud
    }
  }
}));

app.use(cors());
app.use(express.json());

function verificarToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Token no proporcionado');
  }
  jwt.verify(token,'secreto', (err, decoded) => {
    if (err) {
      console.log(token);
      return res.status(403).send('Token inválido');
    }
    req.usuario = decoded;
    next();
  });
}

app.use(verificarToken);


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ami',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    process.exit(1);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Obtener todos los usuarios
app.get('/usuarios/get', (req, res) => {
  const sql = `SELECT * FROM ${tabla}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json(result);
    }
  });
});

// Obtener un usuario por su ID
app.get('/usuarios/get/id/:id', (req, res) => {
  const idUsuario = req.params.id;
  const sql = `SELECT * FROM ${tabla} WHERE id = ?`;
  db.query(sql, [idUsuario], (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
  });
});

// Crear un nuevo usuario
app.post('/usuarios/create', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const sql = `INSERT INTO ${tabla} (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
  db.query(sql, [firstName, lastName, email, password], (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.status(201).send('Usuario creado correctamente');
    }
  });
});

// Actualizar un usuario por su ID
app.put('/usuarios/update/:id', (req, res) => {
  const idUsuario = req.params.id;
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = `UPDATE ${tabla} SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?`;
  db.query(sql, [firstName, lastName, email, hashedPassword, idUsuario], (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.send('Usuario actualizado correctamente');
    }
  });
});

// Eliminar un usuario por su ID
app.delete('/usuarios/delete/:id', (req, res) => {
  const idUsuario = req.params.id;
  const sql = `DELETE FROM ${tabla} WHERE id = ?`;
  db.query(sql, [idUsuario], (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.send('Usuario eliminado correctamente');
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});