const Usuario = require('./usuarios.model');
const Post = require('./post.model');
const Comentarios = require('./comentarios.model');
const { Op } = require("sequelize");

function configurarRelaciones() {
    Usuario.hasMany(Post, {foreignKey: 'idUsuario', as: 'posts'});
    Post.belongsTo(Usuario, {foreignKey: 'idUsuario', as: 'usuario'});

    Post.hasMany(Comentarios, {foreignKey: 'idPost', as: 'comentarios'});
    Comentarios.belongsTo(Post, {foreignKey: 'idPost', as: 'post'});
}


module.exports = {
    configurarRelaciones,
};