const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
require('ejs');

// Se conecta la Base de Datos
const { conectarDB } = require('./database/database');
conectarDB();

const app = express();
const port = process.env.PORT || 4000;

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Variables de entorno
dotenv.config({ path: '.env' });

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
//app.use(require('./routes/post.routes'));

// Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');
})

// Iniciando el servidor
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));