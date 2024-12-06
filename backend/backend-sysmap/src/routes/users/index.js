const express = require('express');
const router = express.Router();
const middleware = require("../../middleware");
const UsersService = require('../../services/users');

const usersService = new UsersService();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await usersService.login({ email, password });
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

router.post('/', async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const result = await usersService.create({ name, password, email });
        return res.status(201).json(result);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});

router.put('/:id', middleware, async (req, res) => {
    const { id } = req.params;
    const { name, password, email } = req.body;
    try {
        const result = await usersService.update({ id, name, password, email });
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        if (err.message.includes('does not exist')) {
            return res.status(404).json({ error: 'Usuário não encontrado' }); 
        }
        return res.status(400).json({ error: 'Erro ao atualizar usuário' }); // HTTP 400: Bad Request
    }
});

router.get('/', middleware, async (req, res) => {
    try {
        const result = await usersService.get();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao buscar usuários' }); 
    }
});

router.get('/:id', middleware, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await usersService.getById({ id });
        if (!result) {
            return res.status(404).json({ error: 'Usuário não encontrado' }); 
        }
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao buscar usuário' }); 
    }
});

router.delete('/:id', middleware, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await usersService.delete({ id });
        if (!result) {
            return res.status(404).json({ error: 'Usuário não encontrado' }); 
        }
        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao deletar usuário' }); 
    }
});

module.exports = router;
