const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const userCollection = "user";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: String,
  password: String,
});

//userSchema.plugin(mongoosePaginate);
//const userModel = mongoose.model(userCollection, userSchema);
const User = mongoose.model("User", userSchema);
module.exports = User;
