const connection = require("../config/database")

const getHomepage = (req, res) => {
    let user = []
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            user = results
            console.log(">>> result = ", results); // results contains rows returned by server
            // console.log(">>>> check user", user)
            res.send(JSON.stringify(user))
        }
    );

}

const getABC = (req, res) => {
    res.send('get abc')
}

const getTan = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    getTan
}