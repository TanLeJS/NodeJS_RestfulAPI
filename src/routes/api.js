const express = require("express")
const { route } = require("./web")
const routerAPI = express.Router()
const {getUsersAPIs,postCreateUserAPI} = require("../controllers/apiController")


//khai báo route

routerAPI.get('/users', getUsersAPIs)
routerAPI.post('/users', postCreateUserAPI)





module.exports = routerAPI //export default