const express = require("express")
const routerAPI = express.Router()
const {getUsersAPIs,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI,postUploadMultipleFilesAPI} = require("../controllers/apiController")
const {postCreateCustomer,postCreateArrayCustomers,getAllCustomers,putUpdateCustomer,deleteACustomer} = require("../controllers/customerController")

//khai báo route

routerAPI.get('/users', getUsersAPIs)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete("/users", deleteUserAPI)

routerAPI.post("/file", postUploadSingleFileAPI)
routerAPI.post("/files", postUploadMultipleFilesAPI)

routerAPI.get("/customers", getAllCustomers)
routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomers)
routerAPI.put('/customers', putUpdateCustomer)
routerAPI.delete('/customers', deleteACustomer)






module.exports = routerAPI //export default