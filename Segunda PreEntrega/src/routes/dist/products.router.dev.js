"use strict";

var _require = require("express"),
    Router = _require.Router;

var _require2 = require("../models/products.model"),
    productModel = _require2.productModel;

var mongoosePaginate = require("mongoose-paginate-v2");

var router = Router(); //cuando usamos mongoose se utilizan funciones asincronas (async), el payload es la informacion que nos va a venir

/* router.get("/products", async (req, res) => {
  try {
    const { page, limit, filter } = req.query;
    let product = await productModel.paginate(
      {},
      { page, limit, category: filter, lean: true }
    );
    res.send({ result: "success", payload: product });
  } catch (error) {
    console.log(error);
  }
}); */

/* router.get("/products", async (req, res) => {
  const filter = req.query.filter;
  //filtro el producto por su categoria 
  let products = await productModel.paginate({ category: filter });
  console.log(products);
  res.send({ result: "success", payload: products });
}); */

router.get("/products", function _callee(req, res) {
  var _req$query, page, limit, filter, sort, priceSort, serch, options, product;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$query = req.query, page = _req$query.page, limit = _req$query.limit, filter = _req$query.filter, sort = _req$query.sort;
          priceSort = sort ? parseInt(sort) : 1;
          serch = filter;
          options = {
            page: page || 1,
            // Página actual
            limit: limit || 10,
            // Cantidad de resultados por página
            sort: {
              price: priceSort
            } // Ordenar por precio

          };
          _context.next = 7;
          return regeneratorRuntime.awrap(productModel.paginate(serch, options));

        case 7:
          product = _context.sent;
          res.send({
            result: "success",
            payload: product
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
/* 
router.get("/products", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const sortOrder = req.query.sortOrder || "asc";
    const filter = req.query.filter;

    const product = await productModel.paginate(
      { category: filter },
      { limit, page, sort: { price: sortOrder } }
    );
    console.log(product);
    res.send({ result: "success", payload: product });
  } catch (error) {
    console.log(error);
  }
}); */

router.post("/", function _callee2(req, res) {
  var _req$body, name, category, price, stock, image, result;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, stock = _req$body.stock, image = _req$body.image;

          if (!name || !category || !price || !stock || !image) {
            res.send({
              status: "error",
              error: "Faltan parametros"
            });
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(productModel.create({
            name: name,
            category: category,
            price: price,
            stock: stock,
            image: image
          }));

        case 4:
          result = _context2.sent;
          res.send({
            result: "success",
            payload: result
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.put("/:uid", function _callee3(req, res) {
  var uid, userToReplace, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          uid = req.params.uid;
          userToReplace = req.body;

          if (!userToReplace.name || !userToReplace.category || !userToReplace.price || !userToReplace.stock || !userToReplace.image) {
            res.send({
              status: "error",
              error: "Faltan parámetros"
            });
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(productModel.updateOne({
            _id: uid
          }, userToReplace));

        case 5:
          result = _context3.sent;
          res.send({
            result: "success",
            payload: result
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router["delete"]("/:uid", function _callee4(req, res) {
  var uid, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          uid = req.params.uid;
          _context4.next = 3;
          return regeneratorRuntime.awrap(productModel.deleteOne({
            _id: uid
          }));

        case 3:
          result = _context4.sent;
          res.send({
            result: "success",
            payload: result
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // la descripcion es para el el app.js pueda consumir lo de este archivo

module.exports = router;