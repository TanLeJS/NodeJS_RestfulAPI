const { uploadSingleFile } = require("../services/fileService")
const { createCustomerService, createArrayCustomerService, getAllCustomersService,putUpdateCustomerService } = require("../services/customerServices")
const { update } = require("../models/customer")
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body

        let imageURL = ""
        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }
        else {
            let result = await uploadSingleFile(req.files.image);
            imageURL = result.path
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageURL
        }
        let customer = await createCustomerService(customerData)

        return res.status(200).json({
            errorCode: 0,
            data: customer
        })
    },
    postCreateArrayCustomers: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        }
        else {
            return res.status(200).json({
                errorCode: -1,
                data: customers
            })
        }

    },
    getAllCustomers: async (req,res) => {
        let customers = await getAllCustomersService();
        return res.status(200).json({
            errorCode: 0,
            data: customers
        })
    },
    putUpdateCustomer: async (req,res) => {
        let {id ,name ,email ,address} = req.body
        let updatedCustomer = await putUpdateCustomerService(id,name,email,address)
        return res.status(200).json({
            errorCode: 0,
            data: updatedCustomer
        })
    }
}