"use strict";

var express = require("express");

var router = express.Router();

var User = require("../models/user.model");

var _require = require("../../utils"),
    createHash = _require.createHash,
    isValidatePassword = _require.isValidatePassword;

router.post("/register", function _callee(req, res) {
  var _req$body, first_name, last_name, email, age, password, hashedPassword, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, age = _req$body.age, password = _req$body.password;

          if (!(!first_name || !last_name || !email || !age || !password)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Error de registro, completar todos los campos"));

        case 3:
          //con el hashedPassword lo uqe hago es que me cree un cifrado en la base de datos ocultando el la contraseña.
          hashedPassword = createHash(password);
          _context.next = 6;
          return regeneratorRuntime.awrap(User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            age: age,
            password: hashedPassword
          }));

        case 6:
          user = _context.sent;
          res.send({
            status: "success",
            payload: user
          });
          console.log("User created" + user); //res.redirect("/login");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/profile", function _callee2(req, res) {
  var _req$session$user, first_name, last_name, email, age;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (req.session.user) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", res.redirect("login"));

        case 2:
          _req$session$user = req.session.user, first_name = _req$session$user.first_name, last_name = _req$session$user.last_name, email = _req$session$user.email, age = _req$session$user.age;
          console.log(first_name, last_name, email, age);
          res.render("profile", {
            first_name: first_name,
            last_name: last_name,
            email: email,
            age: age
          });
          console.log("Usuario inicio session");

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
/* router.get("/login", (res, req) => {
  const { email, password } = req.body;
  if (!req.session.user) {
    res.render("login");
  } else {
    res.render("/views/profile");
  }
});
 */
//En el login si los datos el email y password no son correctos tirar un erro de datos.

router.post("/login", function _callee3(req, res) {
  var _req$body2, email, password, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

          if (!(!email || !password)) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", res.status(400).render("login", {
            error: "Datos el usuario incorrecto"
          }));

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(user.findOne({
            email: email
          }, {
            first_name: 1,
            last_name: 1,
            email: 1,
            age: 1,
            password: 1
          }));

        case 5:
          user = _context3.sent;

          if (user) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(400).render("login", {
            error: "Usuario invalido"
          }));

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get("/logout", function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          delete req.session.user;
          res.redirect("login");

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get("/login", function (req, res) {
  var _req$query = req.query,
      username = _req$query.username,
      password = _req$query.password;

  if (email !== "adminCoder@coder.com" || password !== "adminCod3r123") {
    return res.send("email o contraseña invalida");
  }

  req.session.user = email;
  req.session.admin = true, //si vemos admin en true le damos todo los privilegio a este usuario.
  res.send("Acceso Satisfactorio, permiso de admin ");
});
module.exports = router;