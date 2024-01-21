const User = require("../models/user")


const getUsersAPIs = async(req, res) => {
    let results = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let user = await User.create({
        email : email,
        name: name,
        city: city,
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

module.exports = {
    getUsersAPIs,
    postCreateUserAPI
}