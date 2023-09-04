const mongoose = require("mongoose");

const productCollection = "products";

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  image: String,
});

const productModel = mongoose.model(productCollection, productSchema);

module.exports = { productModel };
