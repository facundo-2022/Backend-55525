"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//DEntro de este archivo van los endpoints
var router = _express["default"].Router();

var users = []; // Aca debajo van los Endpoints

router.get("/api/users", function (req, res) {
  res.json(users);
});
router.post("/api/users", function (req, res) {
  var newUser = req.body;
  users.push(newUser);
  res.json({
    message: "Usuario Agregado"
  });
});
var _default = router;
exports["default"] = _default;