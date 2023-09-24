"use strict";

var express = require("express");

var router = express.Router();

var User = require("..//models/User");

router.post("/register", function _callee(req, res) {
  var _req$body, first_name, last_name, email, age, password, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, age = _req$body.age, password = _req$body.password;
          user = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            age: age,
            password: password
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(user.save);

        case 5:
          res.redirect("/login");
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).send("Error de registro");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;