const {DataTypes, sequelize} = require('../database/database');

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Usuario.sync({force: true }).then(() => {
    console.log('Tabla de Post Creada');
});

module.exports = Usuario;