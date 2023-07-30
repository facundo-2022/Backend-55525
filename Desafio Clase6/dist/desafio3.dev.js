"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = (0, _express["default"])();

var Contenedor = function Contenedor() {
  _classCallCheck(this, Contenedor);
};

app.get("/productos", function (req, res) {
  res.send("producto.txt");
});
app.listen(8080, function () {
  console.log("Servidor is runing on port 8080");
});