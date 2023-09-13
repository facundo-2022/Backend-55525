"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require("mongoose");

var mongoosePaginate = require("mongoose-paginate-v2");

var cartCollection = "carts";
var cartSchema = mongoose.Schema(_defineProperty({
  products: {
    type: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
      },
      id: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        "default": 1
      }
    }],
    "default": []
  }
}, "products", [productSchema]));
cartSchema.plugin(mongoosePaginate);
var cartModel = mongoose.model(cartCollection, cartSchema);
module.exports = {
  cartModel: cartModel
};