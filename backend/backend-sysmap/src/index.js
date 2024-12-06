require("dotenv").config();
const middleware = require("./middleware/index.js")
const express = require("express");
const tarefasRotas = require("./routes/tasks/index.js");
const usersRotas = require("./routes/users/index.js");
const {sequelize} = require("./db/index.js");
const app = express();

const PORT = 3000;
app.use(express.json());

app.use("/tasks",middleware, tarefasRotas );
app.use("/users",usersRotas);

app.listen(PORT,async ()=>{
    console.log("Servidor iniciado na porta: "+ PORT);
    await sequelize.sync();
})
