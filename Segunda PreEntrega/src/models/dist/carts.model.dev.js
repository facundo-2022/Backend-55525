"use strict";

var mongoose = require("mongoose");

var mongoosePaginate = require("mongoose-paginate-v2");

var cartCollection = "carts";
var productSchema = mongoose.Schema({
  products: {
    type: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
      }
    }]
  },
  quantity: {
    type: Number,
    "default": 0
  }
});
var cartSchema = mongoose.Schema({
  /* productId: Number,
  name: String,*/
  users: {
    type: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
      }
    }],
    "default": []
  },
  products: [productSchema]
});
cartSchema.plugin(mongoosePaginate);
var cartModel = mongoose.model(cartCollection, cartSchema);
module.exports = {
  cartModel: cartModel
};