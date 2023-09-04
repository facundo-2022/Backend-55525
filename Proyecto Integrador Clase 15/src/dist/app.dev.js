"use strict";

var express = require("express");

var mongoose = require("mongoose");

var userRouter = require("./routes/users.router.js");

var productRouter = require("./routes/products.router");

var _require = require("..//src/models/user.model"),
    userModel = _require.userModel;

var _require2 = require("..//src/models/products.model"),
    productModel = _require2.productModel;

var app = express();
var port = 8080;
app.listen(port, function () {
  console.log("Serving is running on port ".concat(port));
});
app.use(express.json()); //Enlace de conexion con mongoose atlas

mongoose.connect("").then(function () {
  console.log("Conectado con mi base de datos");
})["catch"](function (error) {
  return console.error("Error en la conexion");
}); //esto es lo que vamos a consumir de routes

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);