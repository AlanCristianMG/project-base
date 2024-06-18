const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 4430;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ami',
  });
  

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});


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

app.post('/register', (req, res) => {
    const {firstName, lastname, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = { firstName, lastname, email, password: hashedPassword, createdAt: new Date(), updatedAt: new Date()};
    db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
            res.status(500).send('Error al registrar el usuario');
        } else {
            res.status(201).send('Usuario registrado exitosamente');
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
        if (err) {
            res.status(500).send('Error al buscar el usuario');
        } else if (results.length > 0) {
            const user = results[0];
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({ id: user.id }, 'secreto');
                res.status(200).json({ token });
            } else {
                res.status(401).send('Credenciales inválidas');
            }
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
