"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("Comision 55525");
});
app.get("/Welcome", function (req, res) {
  res.send("welcome");
});
app.get("*", function (req, res) {
  res.send("Page not found");
});
app.listen(8080, function () {
  console.log("Servidor is runing on port 8080");
});