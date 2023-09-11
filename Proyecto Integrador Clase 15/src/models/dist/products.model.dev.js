"use strict";

var mongoose = require("mongoose");

var mongoosePaginate = require("mongoose-paginate-v2");

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
productSchema.plugin(mongoosePaginate);
var productModel = mongoose.model(productCollection, productSchema);
module.exports = {
  productModel: productModel
};