const express = require("express")
const { route } = require("./web")

const routerAPI = express.Router()


const {getUsersAPIs} = require("../controllers/apiController")


//khai báo route
routerAPI.get('/', (req,res) => {
    res.send("Hello World with APIs")
})

routerAPI.get('/abc', (req,res) => {
    res.status(200).json({
        data: "hello world first api"
    })
})

routerAPI.get('/users', getUsersAPIs)





module.exports = routerAPI //export default