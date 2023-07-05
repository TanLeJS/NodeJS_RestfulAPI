require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require("./routes/web")
const app = express() // app express
const port = process.env.PORT || 8888 // port => hardcode
const hostname = process.env.HOST_NAME
const mysql = require('mysql2');

// config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRoutes)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default 3306
    user: 'root',
    password: '123456', // default empty
    database: 'hoidanit'
});

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>> result = ", results); // results contains rows returned by server
        console.log(">>> fields", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})