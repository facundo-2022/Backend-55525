"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//DEntro de este archivo van los endpoints
var router = _express["default"].Router();

var pets = []; // Aca debajo van los Endpoints

router.get("/api/pets", function (req, res) {
  res.json(pets);
});
router.post("/api/pets", function (req, res) {
  var newPet = req.body;
  pets.push(newPet);
  res.json({
    message: "Mascota Agregada"
  });
});
var _default = router;
exports["default"] = _default;