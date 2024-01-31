require("../config/db");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: String,
  image: String,
  details: String,
});

module.exports = mongoose.model("product", productSchema);
