const mongoose = require("mongoose")




// Định dạng hình thù database, muốn database lưu thông tin gì
const kittySchema = new mongoose.Schema({
    name: String
  });


const Kitten = mongoose.model('Kitten', kittySchema);


module.exports = Kitten;