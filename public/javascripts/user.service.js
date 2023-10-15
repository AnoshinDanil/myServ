const { User } = require('./index')

const serverStart = () => {

    let array = [{
        email: 'jim@gmail.com',
        number: 221122
        }, {
        email: "jam@gmail.com",
        number: 830347
        }, {
        email: "john@gmail.com",
        number: 221122
        }, {
        email: "jams@gmail.com",
        number: 349425
        }, {
        email: "jams@gmail.com",
        number: 141424
        }, {
        email: "jill@gmail.com",
        number: 822287
        }, {
        email: "jill@gmail.com",
        number: 822286
        }]

    array.forEach(async (value) => {
        const userFound = await User.findOne({number: value.number})
        if (!userFound) {
            await User.create({email: value.email, number: value.number})
        }
    })

    return true
}

const findUser = async ({email, number}) => {
    const user = await User.find({email, number: Number(number)})
    if (!user) throw new Error ('User not found')
    return user
}

module.exports = {
    serverStart,
    findUser
}