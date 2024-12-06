const { Task } = require("../../db/index");

class TaskService {

    async create(task) {
        return await Task.create(task);
    }

    async update({ id, ...fields }) {
        await Task.update(fields, {
            where: { id },
        });

        const updatedTask = await Task.findByPk(id);
        return updatedTask;
    }

    async get(){
        return await Task.findAll()
    }

    async getById({ id }) {
        return await Task.findByPk(id);
    }

    async delete({ id }){
        await Task.destroy({
            where: { id },
        });

        const updatedTask = await Task.destroy(id);
        return updatedTask;
    }
}
module.exports = TaskService;