const {DataTypes, sequelize} = require('../database/database');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    nombreApellido: {
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

Usuario.sync({force: false }).then(() => {
    console.log('Tabla de Usuarios Creada');
});


module.exports = Usuario;