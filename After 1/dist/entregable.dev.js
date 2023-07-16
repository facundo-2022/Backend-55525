"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductManager =
/*#__PURE__*/
function () {
  function ProductManager() {
    _classCallCheck(this, ProductManager);

    this.products = [];
    this.nextId = 1;
  }

  _createClass(ProductManager, [{
    key: "addProduct",
    value: function addProduct(product) {
      if (!this.isProductValid(product)) {
        console.log("Error: El producto no es valido");
        return;
        /*lo utilizamos para terminar  ahi la ejecucion*/
      }

      if (this.isCodeDuplicate(product.code)) {
        console.log("Error: El codigo del producto ya esta siendo utilizado");
        return;
      }

      product.id = this.nextId++;
      this.products.push(product);
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return this.products;
    }
  }, {
    key: "getProductById",
    value: function getProductById(id)
    /*recibe el id como parametro*/
    {
      var product = this.products.find(function (p) {
        return p.id === id;
      });

      if (product) {
        return product;
      } else {
        console.log("Error: Producto no encontrado");
      }
    }
  }, {
    key: "isProductValid",
    value: function isProductValid(product) {
      return product.title && product.description && product.price && product.thumbnail && product.code && product.stock !== undefined;
    }
  }, {
    key: "isCodeDuplicate",
    value: function isCodeDuplicate(code) {
      return this.products.some(function (p) {
        return p.code === code;
      });
    }
  }]);

  return ProductManager;
}();
/*Creamos una instancia de productmanager*/


var productManager = new ProductManager();
/*Agregamos Productos*/

productManager.addProduct({
  title: "Producto A",
  description: "Descripcion de Producto A",
  price: 100,
  thumbnail: "/imagenProductoA.jpg",
  code: "P001",
  stock: 5
});
productManager.addProduct({
  title: "Producto B",
  description: "Descripcion de Producto B",
  price: 20,
  thumbnail: "/imagenProductoB.jpg",
  code: "P003",
  stock: 10
});
/*Obtener los productos */

var productsList = productManager.getProducts(); //console.log(productsList);
//Obtener producto por su ID
//const productoId = productManager.getProductById(2);
//console.log(productoId);
//Obtener producto inesistente

var noProduct = productManager.getProductById(8);