const connection = require("../config/database")
const {getAllUsers ,getUserById, updateUserById, deleteUserById } = require("../services/CRUDservices")
const User = require("../models/user")


const getHomepage = async(req, res) => {
    let results = await User.find({})
    return res.render("home.ejs", {listUsers: results})
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    await User.create({
        email : email,
        name: name,
        city: city,
    })
    res.send("create user success")
}

const getCreateUser = (req, res) => {
    res.render("create.ejs")
}

const getUpdatePage = async(req, res) => {
    const userID = req.params.id;
    let user = await User.findById(userID).exec();
    res.render("edit.ejs", {userEdit: user}) // x <- y
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    // await updateUserById(email,name,city,userId)
    await User.updateOne({_id :userId },{name: name, email:email, city: city})
    res.redirect("/");
}

const postDeleteUser = async(req,res) => {
    const userID = req.params.id;
    let user = await User.findById(userID).exec();
    res.render("delete.ejs",{userEdit:user})
}

const postHandleRemoveUser = async(req,res) => {
    const id = req.body.userId
    // await deleteUserById(id)
    let delete_status = await User.deleteOne({_id: id})
    console.log(">>> result", delete_status)
    res.redirect("/")
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}