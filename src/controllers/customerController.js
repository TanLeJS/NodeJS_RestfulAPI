const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomersService,
} = require("../services/customerServices");
const Joi = require("joi");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),

      address: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

      phone: Joi.string().pattern(new RegExp("^[0-9]{10}$")),

      access_token: [Joi.string(), Joi.number()],

      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      description: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
    } else {
    }
    return res.status(200).json({
      mes: error,
    });

    let imageURL = "";
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send("No files were uploaded.");
      return;
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }
    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageURL,
    };
    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },
  postCreateArrayCustomers: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: customers,
      });
    }
  },

  getAllCustomers: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;
    let name = req.query.name;
    if (limit && page) {
      customers = await getAllCustomersService(limit, page, name, req.query);
    } else customers = await getAllCustomersService();
    return res.status(200).json({
      errorCode: 0,
      data: customers,
    });
  },
  putUpdateCustomer: async (req, res) => {
    let { id, name, email, address } = req.body;
    let updatedCustomer = await putUpdateCustomerService(
      id,
      name,
      email,
      address
    );
    return res.status(200).json({
      errorCode: 0,
      data: updatedCustomer,
    });
  },

  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  deleteArrayCustomers: async (req, res) => {
    let customersId = req.body.customersId;
    let result = await deleteArrayCustomersService(customersId);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
};
