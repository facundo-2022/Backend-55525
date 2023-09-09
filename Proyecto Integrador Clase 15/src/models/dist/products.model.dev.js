"use strict";

var mongoose = require("mongoose");

var productCollection = "products";
var productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  image: String,
  users: {
    type: Array,
    "default": []
  }
});
var productModel = mongoose.model(productCollection, productSchema);
module.exports = {
  productModel: productModel
};