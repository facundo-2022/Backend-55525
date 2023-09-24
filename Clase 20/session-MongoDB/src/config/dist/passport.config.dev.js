"use strict";

var passport = require("passport");

var local = require("passport-local");

var userService = require("../models/User");

var _require = require("../../utils"),
    createHash = _require.createHash,
    isValidatePassword = _require.isValidatePassword;

var GitHubStrategy = require("passport-github2");

var localStrategy = local.Strategy; //

/* const initializePassport = () => {
    passport.use(
        "register",
        new localStrategy(
            { passReqToCallback: true, usernameField: "email" },
            async (req, username, password, done) => {
                const { first_name, last_name, email, age } = req.body;
                try {
                    let user = await userService.findOne({ email: username });
                    if (user) {
                        console.log("El usuario ya existe");
                        return done(null, false);
                    }

                    if (!first_name || !last_name || !email || !age || !password) {
                        // Check if all required fields are present in the request body
                        console.log("Faltan campos obligatorios");
                        return done(null, false);
                    }

                    const newUser = {
                        first_name,
                        last_name,
                        email,
                        age,
                        password: createHash(password), // Make sure createHash is defined
                    };
                    let result = await userService.create(newUser);
                    return done(null, result);
                } catch (error) {
                    return done("Error al obtener el usuario " + error);
                }
            }
        )
    ); */

var initializePassport = function initializePassport() {
  passport.use("github", new GitHubStrategy({
    clientID: "Iv1.843f2f0502344391",
    clientSecret: "e9fe35e60e2c5c699520d44fee11dec5876fd63c",
    callbackURL: "http://localhost:8080/api/sessions/githubcallback"
  }, function _callee(accessToken, refreshToken, profile, done) {
    var user, newUser, result;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(userService.findOne({
              email: profile._json.email
            }));

          case 3:
            user = _context.sent;
            console.log(user);

            if (user) {
              _context.next = 13;
              break;
            }

            newUser = {
              first_name: profile._json.name,
              last_name: "",
              age: 18,
              email: profile._json.email,
              password: ""
            };
            _context.next = 9;
            return regeneratorRuntime.awrap(userService.create(newUser));

          case 9:
            result = _context.sent;
            done(null, result);
            _context.next = 14;
            break;

          case 13:
            done(null, user);

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
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });
  passport.deserializeUser(function _callee2(id, done) {
    var user;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(userService.findById(id));

          case 2:
            user = _context2.sent;
            done(null, user);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  passport.use("login", new localStrategy({
    usernameField: "email"
  }, function _callee3(username, password, done) {
    var user;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(userService.findOne({
              email: username
            }));

          case 3:
            user = _context3.sent;

            if (user) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", done(null, false));

          case 6:
            if (isValidatePassword(password, user.password)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", done(null, false));

          case 8:
            return _context3.abrupt("return", done(null, user));

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", done(_context3.t0));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  }));
};

module.exports = initializePassport;