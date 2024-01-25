const User = require("../models/user")
const {uploadSingleFile} = require("../services/fileService")

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

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    // await updateUserById(email,name,city,userId)
    let user = await User.updateOne({_id :userId },{name: name, email:email, city: city})
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUserAPI = async(req,res) => {
    const id = req.body.userId
    // await deleteUserById(id)
    let result = await User.deleteOne({_id: id})
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const postUploadSingleFileAPI = async(req,res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
      }
    let result = await uploadSingleFile(req.files.image);
    console.log(">>> check result", result)
    return res.send("ok single")
}

module.exports = {
    getUsersAPIs,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI
}