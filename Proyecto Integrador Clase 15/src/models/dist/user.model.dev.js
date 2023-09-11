"use strict";

var mongoose = require("mongoose");

var mongoosePaginate = require("mongoose-paginate-v2");

var userCollection = "users"; //El esquema de modelado de como van a lucir los datos

var userSchema = mongoose.Schema({
  first_name: {
    type: String,
    index: true
  },
  last_name: String,
  email: String,
  gender: String,
  products: {
    type: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
      }
    }],
    "default": []
  }
});
userSchema.pre("find", function () {
  this.populate("products.product");
});
userSchema.plugin(mongoosePaginate);
var userModel = mongoose.model(userCollection, userSchema);
module.exports = {
  userModel: userModel
};