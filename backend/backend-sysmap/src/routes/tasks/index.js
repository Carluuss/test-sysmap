const express = require('express');
const router = express.Router();
const TaskService = require('../../services/tasks');

router.post('/', async (req, res) => {
    const { description, start_Date } = req.body;
    const taskService = new TaskService();
    try {
        const result = await taskService.create({ description, start_Date });
        return res.status(201).json(result); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar tarefa.', error: error.message }); 
    }
});

router.patch('/', async (req, res) => {
    const { description, id, start_Date } = req.body;
    const taskService = new TaskService();
    try {
        const result = await taskService.update({ id, description, start_Date });
        if (!result) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' }); 
        }
        return res.status(200).json(result); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao atualizar tarefa.', error: error.message }); 
    }
});

router.get('/', async (req, res) => {
    const taskService = new TaskService();
    try {
        const result = await taskService.get();
        return res.status(200).json(result); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar tarefas.', error: error.message }); 
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const taskService = new TaskService();
    try {
        const result = await taskService.getById({ id });
        if (!result) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' }); 
        }
        return res.status(200).json(result); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar tarefa.', error: error.message }); 
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const taskService = new TaskService();
    try {
        const result = await taskService.delete({ id });
        if (!result) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' }); 
        }
        return res.status(200).json({ message: 'Tarefa excluída com sucesso.' }); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao excluir tarefa.', error: error.message }); 
    }
});

module.exports = router;
