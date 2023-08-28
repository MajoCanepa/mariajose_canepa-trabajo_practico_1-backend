const { Router } = require('express');
const router = Router();

const {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost
} = require('../controllers/post.controller');

router.get('/obtenerPosts/:idUsuario', obtenerPosts);
router.get('/obtenerPost/:id/:idUsuario', obtenerPost);
router.post('/crearPost/:idUsuario', crearPost);
router.put('/actualizarPost/:id/:idUsuario', actualizarPost);
router.delete('/eliminarPost/:id/:idUsuario', eliminarPost);

module.exports = router;