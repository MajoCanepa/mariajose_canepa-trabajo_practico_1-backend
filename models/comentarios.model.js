const {DataTypes, sequelize} = require('../database/database');

const Comentarios = sequelize.define('Comentarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fecha: {
        type:DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Comentarios; 