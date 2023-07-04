const getHomepage = (req, res) => {
    res.send('Hello World! and nodemon')
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