"use strict";

var _require = require("express"),
    Router = _require.Router;

var _require2 = require("../models/carts.model"),
    cartModel = _require2.cartModel;

var mongoosePaginate = require("mongoose-paginate-v2");

var router = Router();
router.get("/", function _callee(req, res) {
  var page, limit, options, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          _context.prev = 2;
          options = {
            page: page,
            limit: limit,
            populate: "products.product"
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(cartModel.paginate({}, options));

        case 6:
          result = _context.sent;
          res.send({
            result: "Success",
            carts: result.docs,
            totalCarts: result.total
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          res.send({
            result: "Error",
            message: "Ha ocurrido un error al obtener los carritos paginados."
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
}); //Crear carrito en la base de datos

router.post("/", function _callee2(req, res) {
  var products, newCart;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          products = req.body.products;
          _context2.prev = 1;
          newCart = new cartModel({
            products: products
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(newCart.save());

        case 5:
          res.send({
            result: "Success",
            message: "Carrito creado con exito"
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.send({
            result: "Error",
            message: "Ha ocurrido un error al crear el carrito."
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); //modificar los datos de productos del carrito

router.put("/:cid", function _callee3(req, res) {
  var cid, productToReplace, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          cid = req.params.cid;
          productToReplace = req.body;

          if (!id || !name || !category || !price || !stock || !image) {
            response.send({
              status: error,
              error: "Completar los parámetros"
            });
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(productModel.updateOne({
            _id: pid
          }, productToReplace));

        case 5:
          result = _context3.sent;
          res.send({
            result: "Success",
            payload: result
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router["delete"]("/:cartId/products/:pId", function _callee4(req, res) {
  var cartId, pId, cart, productIndex;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          cartId = req.params.cartId;
          pId = req.params.pId;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(cartModel.findById(cartId));

        case 5:
          cart = _context4.sent;

          if (cart) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.send({
            result: "Error",
            message: "Carrito no encontrado."
          }));

        case 8:
          productIndex = cart.products.findIndex(function (product) {
            return product._id == pId;
          });

          if (!(productIndex === -1)) {
            _context4.next = 11;
            break;
          }

          return _context4.abrupt("return", res.send({
            result: "Error",
            message: "Producto no encontrado en este carrito."
          }));

        case 11:
          cart.products.splice(productIndex, 1);
          _context4.next = 14;
          return regeneratorRuntime.awrap(cart.save());

        case 14:
          res.send({
            result: "Success",
            message: "Producto eliminado del carrito."
          });
          _context4.next = 20;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](2);
          res.send({
            result: "Error",
            message: "Advertencia error al eliminar producto del carrito."
          });

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 17]]);
});
router.put("/:cartId/products/:pId", function _callee5(req, res) {
  var cartId, pId, newQuantity, cart, product;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          cartId = req.params.cartId;
          pId = req.params.pId;
          newQuantity = req.body.quantity;
          _context5.prev = 3;
          _context5.next = 6;
          return regeneratorRuntime.awrap(cartModel.findById(cartId));

        case 6:
          cart = _context5.sent;

          if (cart) {
            _context5.next = 9;
            break;
          }

          return _context5.abrupt("return", res.send({
            result: "Error",
            message: "Carrito no encontrado."
          }));

        case 9:
          product = cart.products.find(function (product) {
            return product._id == pId;
          });

          if (product) {
            _context5.next = 12;
            break;
          }

          return _context5.abrupt("return", res.send({
            result: "Error",
            message: "Producto no encontrado en este carrito."
          }));

        case 12:
          product.quantity = newQuantity;
          _context5.next = 15;
          return regeneratorRuntime.awrap(cart.save());

        case 15:
          res.send({
            result: "Success",
            message: "Cantidad del producto actualizada correctamente en el carrito."
          });
          _context5.next = 21;
          break;

        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](3);
          res.send({
            result: "Error",
            message: "Error al actualizar la cantidad del producto en el carrito."
          });

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[3, 18]]);
});
router["delete"]("/:cartId", function _callee6(req, res) {
  var cartId, cart;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          cartId = req.params.cartId;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(cartModel.findById(cartId));

        case 4:
          cart = _context6.sent;

          if (cart) {
            _context6.next = 7;
            break;
          }

          return _context6.abrupt("return", res.send({
            result: "Error",
            message: "Carrito no encontrado."
          }));

        case 7:
          cart.products = [];
          _context6.next = 10;
          return regeneratorRuntime.awrap(cart.save());

        case 10:
          res.send({
            result: "Success",
            message: "Todos los productos han sido eliminados del carrito."
          });
          _context6.next = 16;
          break;

        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](1);
          res.send({
            result: "Error",
            message: "Error al eliminar los productos del carrito."
          });

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 13]]);
});
module.exports = router;