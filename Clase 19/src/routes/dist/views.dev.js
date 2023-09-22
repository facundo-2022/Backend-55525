"use strict";

var express = require("express");

var router = express.Router();
router.get("/profile", function (req, res) {
  if (req.session.user) {
    return res.redirect("/login");
  }

  var _req$session$user = req.session.user,
      first_name = _req$session$user.first_name,
      last_name = _req$session$user.last_name,
      email = _req$session$user.email,
      age = _req$session$user.age;
  res.render("profile", {
    first_name: first_name,
    last_name: last_name,
    email: email,
    age: age
  });
});
module.exports = router;