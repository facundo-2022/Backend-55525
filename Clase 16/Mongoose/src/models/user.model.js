const mongoose = require("mongoose");

const userCollection = "users";

//El esquema de modelado de como van a lucir los datos

const userSchema = new mongoose.Schema({
  //el tipo siempre string el index en true porque de esta manera le decimos a mi base de datos que se fije en el first_name
  first_name: { type: "string", index: true },
  //first_name: String,
  last_name: String,
  email: String,
  gender: String,
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = { userModel };
