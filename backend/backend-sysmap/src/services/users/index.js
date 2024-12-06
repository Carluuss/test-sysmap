const { User } = require("../../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../nodemailer")


class UserService {

    async create(user) {
        const saltRounds = 10;
        const password = await bcrypt.hash(user.password, saltRounds);

        const to = `${user.email}`
        const subject = "Bem-vindo ao nosso serviço!";
        const body = 
        `  Olá, ${user.name}!
          Obrigado por se cadastrar. Estamos felizes em tê-lo conosco!
          Aqui está seu código de confirmação.
          123
          Equipe Exemplo.`
        ;

       
       const result =  await User.create({ ...user, password });
       await sendEmail(user.email, subject, body, to);
        return result;
    }

    async update({ id, ...user }) {
        const saltRounds = 10;
        let password
        if (user.password) {
            password = await bcrypt.hash(user.password, saltRounds)
        }
        await User.update({ ...user, password }, {
            where: { id },
        });


        const updatedUser = await User.findByPk(id);
        if (!updatedUser) {
            throw new Error(`User ${id} does not exist`)
        }
        return updatedUser;
    }

    async get() {
        return await User.findAll()
    }

    async getById({ id }) {
        return await User.findByPk(id);
    }

    async delete({ id }) {
        await User.destroy({
            where: { id },
        });

        const updatedUser = await User.destroy(id);
        return updatedUser;
    }

    async login({ email, password }) {
        const findUser = await User.findOne({ where: { email } })
        const cripPass = await bcrypt.compare(password, findUser.password)
        if (!cripPass) {
            throw new Error(`password is incorrect`)
        }
        const id = 1;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 1000
        });
        return ({ token: token });
    }
    
}


module.exports = UserService;