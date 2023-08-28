const { Router } = require('express');
const {crearUsuarios, loginUsuario} = require('../controllers/usuarios.controller');
const router = Router();
const {validaciones2} = require('../models/usuarios.schema');
const {usuarioValidar} = require('../middlewares/validarUsuario');


router.post('/crearUsuario', validaciones2, usuarioValidar, crearUsuarios);
router.post('/loginUsuario', loginUsuario);

module.exports = router;
