const sequelize = require("./config/index.js");
const Task = require("./models/tasks.js");
const User = require("./models/users.js");

module.exports = {sequelize, Task, User};
