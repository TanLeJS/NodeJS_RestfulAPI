const mongoose = require("mongoose")


// Định dạng hình thù database, muốn database lưu thông tin gì
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    },
    { timestamps: true }
);


const Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;