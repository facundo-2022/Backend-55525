const mongoose = require("mongoose");

const userCollection = "users";

//El esquema de modelado de como van a lucir los datos

const userSchema = mongoose.Schema({
  first_name: { type: String, index: true },
  last_name: String,
  email: String,
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = { userModel };
