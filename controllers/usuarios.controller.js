const { Usuario } = require('../models/usuario.model');

const ctrl = {};

ctrl.crearUsuarios = async (req, res) => {
    const {nombreApellido, correo, password} = req.body;
    try{
        const usuario = await Usuario.findOne({where: {correo}});
        if(usuario){
            return res.status(400).json({message: 'El usuario ya existe'});
        }
        const nuevoUsuario = await Usuario.create({
            nombreApellido,
            correo,
            password
        });
        return res.status(201).json(nuevoUsuario);
    }catch (error){
        console.log('Error al crear el usuario', error);
        return res.status(500).json({
            message: 'Error al crear el usuario'
        })
    }   
}

ctrl.loginUsuario = async (req, res) => {
    const {correo, password} = req.body;
    try{
        const usuario = await Usuario.findOne({where: {correo}});
        if(!usuario){
            return res.status(400).json({message: 'El usuario no existe'});
        }
        if(usuario.password !== password){
            return res.status(400).json({message: 'La contraseña es incorrecta'});
        }
        return res.status(200).json({message: 'Login correcto'});
    }catch (error){
        console.log('Error al iniciar sesión', error);
        return res.status(500).json({
            message: 'Error al iniciar sesión'
        })
    }
}