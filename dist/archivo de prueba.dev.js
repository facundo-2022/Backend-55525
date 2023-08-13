"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contenedor =
/*#__PURE__*/
function () {
  function Contenedor(file) {
    _classCallCheck(this, Contenedor);

    /*el contructor recibe un archivo file*/
    this.file = file;
    /*con el this hacemos referencia a ese archivo file*/
  }

  _createClass(Contenedor, [{
    key: "save",
    value: function save(obj) {
      var objects, lastId, newId, newObj;
      return regeneratorRuntime.async(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(this.getAllObjects());

            case 3:
              objects = _context.sent;
              lastId = objects.length > 0 ? objects[objects.length - 1].id : 0;
              /*alternario si es mayor a 0 volvemos a objects my incrementamos lo que esta entre corchete.*/

              newId = lastId + 1;
              newObj = _objectSpread({
                id: newId
              }, obj);
              /*utilizamos el spread operator para traer lo que tenemos en obj.*/

              objects.push(newObj);
              _context.next = 10;
              return regeneratorRuntime.awrap(this.saveObjects(objects));

            case 10:
              return _context.abrupt("return", newId);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              throw new Error("Error saving objects");

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 13]]);
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var objects, obj;
      return regeneratorRuntime.async(function getById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.getAllObjects());

            case 3:
              objects = _context2.sent;
              obj = objects.find(function (o) {
                return o.id === id;
              });
              return _context2.abrupt("return", obj || null);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              throw new Error("Error al obtener el id");

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 8]]);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      var objects;
      return regeneratorRuntime.async(function getAll$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(this.getAllObjects());

            case 3:
              objects = _context3.sent;
              return _context3.abrupt("return", objects);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              throw new Error("Error al obtener los objectos");

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }, {
    key: "deleteById",
    value: function deleteById(id) {
      var objects;
      return regeneratorRuntime.async(function deleteById$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return regeneratorRuntime.awrap(this.getAllObjects());

            case 3:
              objects = _context4.sent;
              objects = objects.filter(function (o) {
                return o.id !== id;
              });
              _context4.next = 7;
              return regeneratorRuntime.awrap(this.saveObjects(objects));

            case 7:
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              throw new Error("Error al eliminar el objecto");

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      return regeneratorRuntime.async(function deleteAll$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return regeneratorRuntime.awrap(this.saveObjects([]));

            case 3:
              _context5.next = 8;
              break;

            case 5:
              _context5.prev = 5;
              _context5.t0 = _context5["catch"](0);
              throw new Error("Error al eliminar los objetos");

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[0, 5]]);
    }
  }, {
    key: "getAllObjects",
    value: function getAllObjects() {
      var data;
      return regeneratorRuntime.async(function getAllObjects$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return regeneratorRuntime.awrap(_fs["default"].promises.readFile(this.file, "utf8"));

            case 3:
              data = _context6.sent;
              return _context6.abrupt("return", data ? JSON.parse(data) : []);

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", []);

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }, {
    key: "saveObjects",
    value: function saveObjects(objects) {
      return regeneratorRuntime.async(function saveObjects$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return regeneratorRuntime.awrap(_fs["default"].promises.writeFile(this.file, JSON.stringify(objects, null, 2)));

            case 3:
              _context7.next = 8;
              break;

            case 5:
              _context7.prev = 5;
              _context7.t0 = _context7["catch"](0);
              throw new Error("Error al guardar objetos");

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, [[0, 5]]);
    }
  }]);

  return Contenedor;
}();

var main = function main() {
  var productos, obj, id;
  return regeneratorRuntime.async(function main$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          productos = new Contenedor("productos.txt"); //obtener objetos por ID

          _context8.next = 3;
          return regeneratorRuntime.awrap(productos.getById(4));

        case 3:
          obj = _context8.sent;
          console.log("Objeto Obtenido", obj); //guardar objetos

          _context8.next = 7;
          return regeneratorRuntime.awrap(productos.save({
            title: "Producto 3",
            price: 100
          }));

        case 7:
          id = _context8.sent;
          console.log("Objeto guardado con ID:", id); //obtener todos los objetos
          //const allObjects = await productos.getAll();
          //console.log("Objetos guardados", allObjects);
          ///eliminar un Objeto
          //await productos.deleteById(1);
          //console.log("Objeto eliminado");

        case 9:
        case "end":
          return _context8.stop();
      }
    }
  });
};

main()["catch"](function (error) {
  return console.error(error);
});