"use strict";

var express = require("express");

var app = express();
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