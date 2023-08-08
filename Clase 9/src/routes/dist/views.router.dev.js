"use strict";

var express = require("express");

var router = express.Router();
var food = [{
  name: "Hamburguesa",
  price: 1000
}, {
  name: "Lomo",
  price: 2000
}, {
  name: "Picada",
  price: 3000
}];
router.get("/", function (req, res) {
  var testUser = {
    name: "Juan",
    lastname: "Perez",
    role: "admin"
  };
  res.render("index", {
    user: testUser,
    isAdmin: testUser.role === "admin",
    food: food
  });
});
module.exports = router; //tengo que exportar el router desde aca