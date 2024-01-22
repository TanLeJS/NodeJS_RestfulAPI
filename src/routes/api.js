const express = require("express")
const { route } = require("./web")
const routerAPI = express.Router()
const {getUsersAPIs,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI} = require("../controllers/apiController")


//khai báo route

routerAPI.get('/users', getUsersAPIs)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete("/users", deleteUserAPI)




module.exports = routerAPI //export default