const mongoose = require("mongoose")




// Định dạng hình thù database, muốn database lưu thông tin gì
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
  });


const User = mongoose.model('user', userSchema);


module.exports = User;