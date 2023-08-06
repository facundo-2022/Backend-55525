"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Router
//Codigo para levantar el servidor
var app = (0, _express["default"])();
var PORT = 8080;
app.listen(PORT, function () {
  console.log("server listening on port ".concat(PORT));
});