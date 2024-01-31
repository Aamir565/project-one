require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  confirmPassword: String,
  contact: String,
  gender: String,
  address: String,
  state: String,
  city: String,
});

module.exports = mongoose.model("user", UserSchema);
