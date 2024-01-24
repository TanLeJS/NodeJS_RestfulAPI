const express = require("express")
const routerAPI = express.Router()
const {getUsersAPIs,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI} = require("../controllers/apiController")


//khai báo route

routerAPI.get('/users', getUsersAPIs)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete("/users", deleteUserAPI)

routerAPI.post("/file", postUploadSingleFileAPI)




module.exports = routerAPI //export default