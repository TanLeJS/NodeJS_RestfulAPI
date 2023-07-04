const express = require('express')
const path = require('path')
const app = express() // app express
const port = 8080 // port

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/tan', (req, res) => {
    // res.send('<h1> Hello World! 123 </h1>')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})