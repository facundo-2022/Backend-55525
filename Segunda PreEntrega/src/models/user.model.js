const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const userCollection = "users";

//El esquema de modelado de como van a lucir los datos

const userSchema = mongoose.Schema({
  first_name: { type: String, index: true },
  last_name: String,
  email: String,
  gender: String,
  products: {
    type: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
      },
    ],
    default: [],
  },
});

userSchema.pre("find", function () {
  this.populate("products.product");
});

userSchema.plugin(mongoosePaginate);
const userModel = mongoose.model(userCollection, userSchema);

module.exports = { userModel };
