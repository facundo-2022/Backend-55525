"use strict";

var passport = require("passport");

var local = require("passport-local");

var userService = require("../models/user.model");

var _require = require("../../utils"),
    createHash = _require.createHash,
    isValidatePassword = _require.isValidatePassword;

var GitHubStrategy = require("passport-github2");

var localStrategy = local.Strategy;

var initializePassport = function initializePassport() {
  passport.use("github", new GitHubStrategy({
    clientID: "Iv1.f26e4f1f954a0d52",
    clientSecret: "481456f66b327ccccb6c701d5717c5b97784e6db",
    callbackURL: "http://localhost:8080/api/usuarios/githubcallback"
  }, // para usarlo necesitamos declarar unas parametros que son los tres que estan ahi, y desde la pagina de github copiamos el clientId cuando creamos la app. client Secret lo creamos cuando generamos el new el clientSecret desde github
  function _callee(accessToken, refreshToken, profile, done) {
    var user, newUser, resultado;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //try y catch para validar los datos que tenga sean los que necesito
            console.log(profile); //aca ponemos los datos del usuario, el user service lo llamo desde el user.model

            _context.next = 4;
            return regeneratorRuntime.awrap(userService.findOne({
              email: profile._json.email
            }));

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 13;
              break;
            }

            newUser = {
              first_name: profile._json.name,
              //esto es lo que viene del profile
              last_name: "",
              // este no me lo proporciona github y al ser un vacio me permite para plasmarlo en mi basedate
              age: 20,
              email: profile._json.email,
              password: "" // el passwor es una validacion de tercero y no lo necesitamos por eso ponemos un string vacio

            };
            _context.next = 9;
            return regeneratorRuntime.awrap(userService.create(newUser));

          case 9:
            resultado = _context.sent;
            //esto es para crear un nuevo usuario
            done(null, resultado); //con el don le digo que no hay errores y que nos muestre el resultado

            _context.next = 14;
            break;

          case 13:
            done(null, user); //y si ya esta registrado que me confirme

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", done(_context.t0));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]]);
  }));
};

passport.serializeUser(function _callee2(user, done) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          done(null, user.id);

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
passport.deserializeUser(function _callee3(id, done) {
  var user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(userService.findById(id));

        case 2:
          user = _context3.sent;
          done(null, user);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
passport.use("login", new localStrategy({
  usernameField: "email"
}, function _callee4(username, password, done) {
  var user;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(userService.findOne({
            email: username
          }));

        case 3:
          user = _context4.sent;

          if (user) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", done(null, false));

        case 6:
          if (isValidatePassword(password, user.password)) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", done(null, false));

        case 8:
          return _context4.abrupt("return", done(null, user));

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", done(_context4.t0));

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
}));
module.exports = initializePassport;