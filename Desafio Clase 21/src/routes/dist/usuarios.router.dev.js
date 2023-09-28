"use strict";

var express = require("express");

var router = express.Router();

var usuario = require("../models/user.model");

var _require = require("../../utils"),
    createHash = _require.createHash,
    isValidatePassword = _require.isValidatePassword;

var passport = require("passport"); //const jwt = require("jsonwebtoken");


router.get("/login", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render("login");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/register", function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.render("register");

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get("/profile", function _callee3(req, res) {
  var _req$session$user, first_name, last_name, email, age;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (req.session.user) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", res.redirect("login"));

        case 2:
          _req$session$user = req.session.user, first_name = _req$session$user.first_name, last_name = _req$session$user.last_name, email = _req$session$user.email, age = _req$session$user.age;
          res.render("profile", {
            first_name: first_name,
            last_name: last_name,
            age: age,
            email: email
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post("/login", function _callee4(req, res) {
  var _req$body, email, password, user;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;

          if (!(!email || !password)) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(400).render("login", {
            error: "Valores erroneos"
          }));

        case 3:
          _context4.next = 5;
          return regeneratorRuntime.awrap(usuario.findOne({
            email: email
          }, {
            first_name: 1,
            last_name: 1,
            age: 1,
            password: 1,
            email: 1
          }));

        case 5:
          user = _context4.sent;

          if (user) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(400).render("login", {
            error: "Usuario no encontrado"
          }));

        case 8:
          if (isValidatePassword(user, password)) {
            _context4.next = 10;
            break;
          }

          return _context4.abrupt("return", res.status(401).render("login", {
            error: "Error en password"
          }));

        case 10:
          /*   req.session.user = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
          };
          */
          res.redirect("/api/usuarios/profile");

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get("/logout", function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          delete req.session.user;
          res.redirect("login");

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.get("/faillogin", function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log("Hubo un error en la autenticación");
          res.send({
            error: "Error en la autenticación"
          });

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //en esta ruta vamos a capturar el mail del user.

router.get("/github", passport.authenticate("github", {
  scope: ["user:email"]
}), function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
        case "end":
          return _context7.stop();
      }
    }
  });
}); //el failureRedirect es la opcion pra que nos envie a una page en el caso de que no este definido como usuario

router.get("/githubcallback", passport.authenticate("github", {
  failureRedirect: "/login"
}), function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          req.session.user = req.user;
          res.redirect("/api/usuarios/profile");

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  });
});
/* router.get("/profile", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("login");
  }

  const { first_name, last_name, email, age } = req.session.user;

  res.render("profile", { first_name, last_name, age, email });
}); */

module.exports = router;