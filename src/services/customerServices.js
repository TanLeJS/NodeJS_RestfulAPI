const Customer = require("../models/customer");
const aqp = require("api-query-params");

const createCustomerService = async (customerData) => {
  console.log("Check customer", customerData);
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCustomersService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      console.log(">>> check filter: ", filter);
      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log(">>> Check error: ", error);
    return null;
  }
};

const putUpdateCustomerService = async (id, name, email, address) => {
  try {
    let customer = await User.updateOne({ _id: id }, { name, email, address });
    return customer;
  } catch (error) {
    console.log(">>> check result: ", error);
    return null;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log(">>> check result: ", error);
    return null;
  }
};

const deleteArrayCustomersService = async (customersId) => {
  try {
    result = await Customer.delete({ _id: { $in: customersId } });
    return result;
  } catch (error) {
    console.log(">>> check result: ", error);
    return null;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomersService,
};
