const send = require("../../services/nodemailer/index")

const sendMail =  (req, res) => {
    const { to, subject, body} = req.body
    send(to, subject, body)

    return res.json('Email enviado com sucesso')
}

module.exports = {
    sendMail
}