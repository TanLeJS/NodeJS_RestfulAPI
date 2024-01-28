const express = require("express")
const routerAPI = express.Router()
const {getUsersAPIs,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI,postUploadMultipleFilesAPI} = require("../controllers/apiController")
const {postCreateCustomer,postCreateArrayCustomers,getAllCustomers,putUpdateCustomer,deleteACustomer,deleteArrayCustomers} = require("../controllers/customerController")

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
routerAPI.delete('/customers-many', deleteArrayCustomers)

routerAPI.get('/info', (req,res) => {
    console.log(">>> check: ", req.query)
    return res.status(200).json({
        data: req.query
    })
})

routerAPI.get('/info/:name/:address', (req,res) => {
    console.log(">>> check req.params: ", req.params)
    return res.status(200).json({
        data: req.params
    })
})








module.exports = routerAPI //export default