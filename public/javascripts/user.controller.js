let service = require("./user.service")

const serverStart = async (req, res) => {
    try{
        service.serverStart()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
    }catch(err){
        res.status(500).send({error: err})
    }
}

const findUser = async (req, res) => {
    const { email, number } = req.query
    try{
        service.findUser({email, number})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
    }catch(err){
        res.status(500).send({error: err})
    }
}

module.exports = {
    serverStart,
    findUser
}