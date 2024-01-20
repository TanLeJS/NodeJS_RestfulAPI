const connection = require("../config/database")
const {getAllUsers ,getUserById, updateUserById, deleteUserById } = require("../services/CRUDservices")

const User = require("../models/user")
const getHomepage = async(req, res) => {
    let results = []
    return res.render("home.ejs", {listUsers: results})
}

const getABC = (req, res) => {
    res.send('get abc')
}

const getTan = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // let [results, fields] = await connection.query(
    //     `   INSERT INTO Users  (email ,name, city) VALUES(?, ?, ?); `, [email, name, city]
    // );
    await User.create({
        email,
        name,
        city
    })
    res.send("create user success")
}

const getCreateUser = (req, res) => {
    res.render("create.ejs")
}

const getUpdatePage = async(req, res) => {
    const userID = req.params.id;
    let user =  await getUserById(userID)
    res.render("edit.ejs", {userEdit: user}) // x <- y
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email,name,city,userId)
    res.redirect("/");
}

const postDeleteUser = async(req,res) => {
    const userID = req.params.id;
    let user =  await getUserById(userID)
    res.render("delete.ejs",{userEdit:user})
}

const postHandleRemoveUser = async(req,res) => {
    const id = req.body.userId
    await deleteUserById(id)
    res.redirect("/")
}

module.exports = {
    getHomepage,
    getABC,
    getTan,
    postCreateUser,
    getCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}