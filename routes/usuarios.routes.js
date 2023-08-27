const Router = require('express');
const router = Router();

const {
    crearUsuario,
    loginUsuario
} = require('../controllers/usuarios.controller');

router.post('/crearUsuario', crearUsuario);
router.post('/loginUsuario', loginUsuario);

module.exports = router;
