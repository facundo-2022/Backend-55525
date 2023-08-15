"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var fs = require("fs");

var path = require("path");

var router = express.Router();
var FILE_PATH = path.join(__dirname, "../../products.json");
router.get("/api/products/", function (req, res) {
  try {
    var data = fs.readFileSync(FILE_PATH, "utf8");
    var products = JSON.parse(data);
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los productos"
    });
  }
});
router.get("/api/products/:id", function (req, res) {
  var pid = parseInt(req.params.id);

  try {
    var data = fs.readFileSync(FILE_PATH, "utf8");
    var products = JSON.parse(data);
    var product = products.find(function (product) {
      return product.id === pid;
    });

    if (!product) {
      return res.status(404).json({
        error: "El producto no se ha encontrado"
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener el producto"
    });
  }
});
router.post("/api/products", function (req, res) {
  var newProduct = req.body;
  newProduct.id = generateUniqueId();

  try {
    var data = fs.readFileSync(FILE_PATH, "utf8");
    var products = JSON.parse(data);
    products.push(newProduct);
    fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2), "utf8");
    res.json({
      message: "Producto se ha agregado satisfactoriamente."
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al agregar el producto"
    });
  }
});
router.put("/api/products/:id", function (req, res) {
  var pid = parseInt(req.params.id);
  var updateFields = req.body;

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({
      error: "Se debe proporcionar al menos un campo para actualizar"
    });
  }

  try {
    var data = fs.readFileSync(FILE_PATH, "utf8");
    var products = JSON.parse(data);
    var productIndex = products.findIndex(function (product) {
      return product.id == pid;
    });

    if (productIndex === -1) {
      return res.status(404).json({
        error: "Producto no encontrado"
      });
    }

    products[productIndex] = _objectSpread({}, products[productIndex], {}, updateFields);
    fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2), "utf8");
    res.json(products[productIndex]);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el producto"
    });
  }
});
router["delete"]("/api/products/:id", function (req, res) {
  var pid = req.params.id;

  try {
    var data = fs.readFileSync(FILE_PATH, "utf8");
    var products = JSON.parse(data);
    var productIndex = products.findIndex(function (product) {
      return product.id === pid;
    });

    if (productIndex === -1) {
      return res.status(404).json({
        error: "Producto no encontrado"
      });
    }

    var deletedProduct = products.splice(productIndex, 1);
    fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2), "utf8");
    res.json(deletedProduct[0]);
    console.log("Se elimina el art\xEDculo con c\xF3digo: ".concat(deletedProduct[0].id));
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el producto"
    });
  }
});

function generateUniqueId() {
  return Date.now().toString();
}

module.exports = router;