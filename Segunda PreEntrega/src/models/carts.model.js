const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const cartCollection = "carts";

const productSchema = mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
      },
    ],
  },
  quantity: { type: Number, default: 0 },
});

const cartSchema = mongoose.Schema({
  /* productId: Number,
  name: String,*/

  users: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
          required: true,
        },
      },
    ],
    default: [],
  },
  products: [productSchema],
});

cartSchema.plugin(mongoosePaginate);
const cartModel = mongoose.model(cartCollection, cartSchema);

module.exports = { cartModel };
