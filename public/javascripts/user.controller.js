let service = require("./user.service")
let globals = require("./globals")

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
    const { ip } = req.ip
    try{

        if (globals.obj.requests.length > 0) {
            globals.interruptRequest({ip})
        }

        globals.addRequest({ip, req, res})
        setTimeout(() => {
            service.findUser({email, number})
            .then((data) => {
                res.status(200).send(data)
                globals.removeRequest({ip})
            })
            .catch((err) => {
                res.status(500).send({error: err.message})
                globals.removeRequest({ip})
            })
        }, 5000);
    }catch(err){
        console.log(err)
        globals.removeRequest({ip})
        res.status(500).send({error: err.message})
    }
}

module.exports = {
    serverStart,
    findUser
}