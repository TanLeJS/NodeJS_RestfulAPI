const connection = require("../config/database")
const {getAllUsers} = require("../services/CRUDservices")

const getHomepage = async(req, res) => {
    let results = await getAllUsers()
    ``
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

    let [results, fields] = await connection.query(
        `   INSERT INTO Users  (email ,name, city) VALUES(?, ?, ?); `, [email, name, city]
    );
    res.send("create user success")
    console.log("<<<< check result,", results)
}

const getCreateUser = (req, res) => {
    res.render("create.ejs")
}
module.exports = {
    getHomepage,
    getABC,
    getTan,
    postCreateUser,
    getCreateUser
}