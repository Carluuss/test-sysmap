const Sequelize = require('sequelize');
const database = require('../config/index');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
   name: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   password: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   email: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   confirm: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
   }
})
 
module.exports = User;