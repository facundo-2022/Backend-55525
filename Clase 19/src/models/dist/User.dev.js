"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String
});
module.exports = mongoose.model("User", userSchema);