const Post = require('../models/post.model');
const ctrl = {};

ctrl.obtenerPosts = async (req, res) => {
  const{ idUsuario } = req.params;
    try {
        const posts = await Post.findAll({
            where: {
                idUsuario
            }
        });

        return  res.status(200).json(posts);
    }catch (error) {
        console.log('Error al obtener los posts', error);
        return res.status(500).json({
            message: 'Error al obtener los posts'
        })
    }
}

ctrl.obtenerPost = async (req, res) => {
    const {idUsuario, id} = req.params;
    try {
        const post = await Post.findOne({
            where: {
                idUsuario,
                id
            }
        });
        return res.status(200).json(post);
    }catch (error) {
        console.log('Error al obtener el post', error);
        return res.status(500).json({
            message: 'Error al obtener el post'
        })
    }
}

ctrl.crearPost = async (req, res) => {
    const {
        idUsuario,
        titulo,
        contenido,
        fecha
    }  = req.body;
    try {
        //se crea una nueva instancia de post
        const nuevoPost = new Post({
            idUsuario,
            titulo,
            contenido,
            fecha
        });

        //se guarda en la base de datos
        await nuevoPost.save();
        return res.status(201).json({ message: 'Post creado con exito' })
    }catch (error) {
        console.log('Error al crear el post', error);
        return res.status(500).json({ message: 'Error al crear el post' })
    }
}

ctrl.actualizarPost = async (req, res) => {
    const {id, idUsuario} = req.params;
    try {
        const post = await Post.findOne({
            where: {
                idUsuario,
                id
            }
        })
        await post.update(req.body);
        return res.status(201).json({ message: 'Post actualizado con exito' })
    }catch (error) {
        console.log('Error al actualizar el post', error);
        return res.status(500).json({ message: 'Error al actualizar el post' })
    }
}

ctrl.eliminarPost = async (req, res) => {
    const {id, idUsuario} = req.params;
    try {
        const post = await Post.findOne({
            where: {
                idUsuario,
                id
            }
        })
        await post.destroy();
        return res.status(201).json({ message: 'Post eliminado con exito' })
    }catch (error) {
        console.log('Error al eliminar el post', error);
        return res.status(500).json({ message: 'Error al eliminar el post' })
    }
}


module.exports = ctrl