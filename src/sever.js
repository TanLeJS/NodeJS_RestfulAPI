require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require("./routes/web")
const apiRoutes = require("./routes/api")
const app = express() // app express
const port = process.env.PORT || 8888 // port => hardcode
const hostname = process.env.HOST_NAME
const fileUpload = require('express-fileupload');
const connection = require("./config/database")


// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
configViewEngine(app)

// config file upload
app.use(fileUpload());


// khai báo route
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);


(async() => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(" >>> Backend Zero app connect to DB:  ", error)
    }
})()



//test connection

