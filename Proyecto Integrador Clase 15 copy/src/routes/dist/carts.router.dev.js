"use strict";

var _require = require("express"),
    Router = _require.Router;

var _require2 = require("../models/carts.model"),
    cartModel = _require2.cartModel;

var mongoosePaginate = require("mongoose-paginate-v2");

var router = Router();
router["delete"]("/api/carts/:cid/products/:pid", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/api/carts/:cid", function _callee2(req, res) {
  var _req$body, products, quantity, result;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, products = _req$body.products, quantity = _req$body.quantity;

          if (!products || !quantity) {
            res.send({
              status: "error",
              error: "Missing body params"
            });
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(cartModel.create({
            products: products,
            quantity: quantity
          }));

        case 4:
          result = _context2.sent;
          console.log(result);
          res.send({
            result: "success",
            payload: result
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.put("/api/carts/:cid/products/:pid", function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router["delete"]("/api/carts/:cid", function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;