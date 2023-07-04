const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT || 8888 // port => hardcode
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! and nodemon')
})

app.get('/tan', (req, res) => {
    // res.send('<h1> Hello World! 123 </h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})