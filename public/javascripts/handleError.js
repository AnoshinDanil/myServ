const handleError = ({err, req, res}) => {
    console.log(err)
    const {message, status} = err
    return res.status(status || 500).json({error: message})
}

module.exports = {
    handleError
}