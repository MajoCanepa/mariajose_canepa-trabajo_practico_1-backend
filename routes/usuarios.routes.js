const { Router } = require('express');
const router = Router();

const {
    crearUsuarios,
    loginUsuario
} = require('../controllers/usuarios.controller');

router.post('/crearUsuario', crearUsuarios);
router.post('/loginUsuario', loginUsuario);

module.exports = router;
