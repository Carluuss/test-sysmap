const Sequelize = require('sequelize');
const database = require('../config/index');

const Task = database.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_Date: {
        type: Sequelize.DATE,
    },
})
 
module.exports = Task;