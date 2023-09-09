"use strict";

var express = require("express");

var mongoose = require("mongoose");

var userRouter = require("./routes/users.router.js");

var productRouter = require("./routes/products.router");

var _require = require("..//src/models/user.model"),
    userModel = _require.userModel;

var _require2 = require("..//src/models/products.model"),
    productModel = _require2.productModel;

var mongoosePaginate = require("mongoose-paginate-v2");

var app = express();
var port = 8080;
app.listen(port, function () {
  console.log("Serving is running on port ".concat(port));
});
app.use(express.json()); //Enlace de conexion con mongoose atlas

var environment = function environment() {
  var response;
  return regeneratorRuntime.async(function environment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority").then(function () {
            console.log("Conectado con mi base de datos");
          })["catch"](function (error) {
            return console.error("Error en la conexion");
          }));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(userModel.finde);

        case 4:
          response = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; //esto es lo que vamos a consumir de routes


app.use("/api/users", userRouter);
app.use("/api/products", productRouter);