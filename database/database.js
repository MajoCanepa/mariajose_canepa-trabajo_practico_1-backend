const { Sequelize, Model, DataTypes } = require('sequelize');  // Se importan librerias

const sequelize = new Sequelize('post', 'root', '', {
        host: 'localhost',
        dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    }
);

const conectarDB = async () => {
    try{
        await sequelize.authenticate()
        console.log('Conexión a la Base de Datos Exitosa');
    }catch (error){
        console.log('Error al Conectar a la Base de Datos: ',error);
    } 
};

module.exports = {
    sequelize,
    DataTypes, 
    Model,
    conectarDB
}