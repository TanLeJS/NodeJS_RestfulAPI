require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require("./routes/web")
const app = express() // app express
const port = process.env.PORT || 8888 // port => hardcode
const hostname = process.env.HOST_NAME
const connection = require("./config/database")

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRoutes)

//test connection


// simple query
// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {

//     }
// );

app.listen(port, hostname, () => {

})