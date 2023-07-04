
const express = require("express")
const router = express.Router()
//khai báo route
router.get('/', (req, res) => {
    res.send('Hello World! and nodemon')
})

router.get('/tan', (req, res) => {
    // res.send('<h1> Hello World! 123 </h1>')
    res.render('sample.ejs')
})

module.exports = router //export default