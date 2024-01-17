require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require("./routes/web")
const app = express() // app express
const port = process.env.PORT || 8888 // port => hardcode
const hostname = process.env.HOST_NAME
const connection = require("./config/database")
const mongoose = require("mongoose")

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRoutes);


const kittySchema = new mongoose.Schema({
    name: String
  });


const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Hoi dan IT cat' });
cat.save();

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

