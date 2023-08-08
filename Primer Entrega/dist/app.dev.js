"use strict";

var express = require("express");

var path = require("path");

var productsRouter = require("./src/routes/products.router");

var cartsRouter = require("./src/routes/carts.router");

var app = express();
var PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(__dirname, "public")));
app.use("/", productsRouter);
app.use("/", cartsRouter);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/public", "index.html"));
});
app.listen(PORT, function () {
  console.log("Server online on port".concat(PORT));
});