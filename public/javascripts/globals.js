let obj = {
    requests : []
}

const addRequest = ({ip, req, res}) => {
    let filteredObj = obj.requests.filter(req => req.ip === ip)
    if (filteredObj.length !== 0) {
    } else {
        obj.requests.push({ip, req, res})
    }
    return obj
}

const removeRequest = ({ip}) => {
    obj.requests = obj.requests.filter(req => req.ip !== ip)
    return obj
}

const interruptRequest = ({ip}) => {
    const filteredObject = obj.requests.filter(req => req.ip === ip)
    if (filteredObject.length > 0) {
        filteredObject[0].res.end()
    }
}

module.exports = {
    obj,
    addRequest,
    removeRequest,
    interruptRequest
}