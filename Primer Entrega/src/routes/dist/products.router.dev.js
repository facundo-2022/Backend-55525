"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var router = express.Router(); // Array de productos

var products = []; // obtener todos los productos

router.get("/api/products", function (req, res) {
  res.json({
    products: products
  });
}); //  obtener un producto específico

router.get("/api/products/:pid", function (req, res) {
  var pid = parseInt(req.params.pid);
  console.log(pid);
  var product = products.find(function (product) {
    return product.id === pid;
  });

  if (!product) {
    return res.status(404).json({
      error: "Producto no encontrado."
    });
  }

  return res.json(product);
}); // agregar un nuevo producto

router.post("/api/products", function (req, res) {
  var newProduct = req.body;
  products.push(newProduct);
  res.json({
    message: "Producto agregado correctamente."
  });
});

function generateUniqueId() {
  return Date.now().toString();
} //  actualizar un producto por su ID


router.put("/api/products/:pid", function (req, res) {
  var pid = parseInt(req.params.pid);
  var updateFields = req.body; // Validamos los campos

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({
      error: "Debe proporcionar al menos un campo para actualizar."
    });
  }

  var productIndex = products.findIndex(function (product) {
    return product.id === pid;
  });

  if (productIndex === -1) {
    return res.status(404).json({
      error: "Producto no encontrado."
    });
  }

  products[productIndex] = _objectSpread({}, products[productIndex], {}, updateFields);
  return res.json(products[productIndex]);
}); //  eliminar un producto por su ID

router["delete"]("/api/products/:pid", function (req, res) {
  var pid = parseInt(req.params.pid);
  var productIndex = products.find(function (product) {
    return product.id === pid;
  });

  if (productIndex === -1) {
    return res.status(404).json({
      error: "Producto no encontrado."
    });
  }

  var deletedProduct = products.splice(productIndex, 1);
  return res.json(deletedProduct[0]);
});
module.exports = router;