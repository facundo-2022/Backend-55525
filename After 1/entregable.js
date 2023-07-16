class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    if (!this.isProductValid(product)) {
      console.log("Error: El producto no es valido");
      return; /*lo utilizamos para terminar  ahi la ejecucion*/
    }
    if (this.isCodeDuplicate(product.code)) {
      console.log("Error: El codigo del producto ya esta siendo utilizado");
      return;
    }
    product.id = this.nextId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) /*recibe el id como parametro*/ {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: Producto no encontrado");
    }
  }

  isProductValid(product) {
    return (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock !== undefined
    );
  }

  isCodeDuplicate(code) {
    return this.products.some((p) => p.code === code);
  }
}

/*Creamos una instancia de productmanager*/

const productManager = new ProductManager();

/*Agregamos Productos*/

productManager.addProduct({
  title: "Producto A",
  description: "Descripcion de Producto A",
  price: 100,
  thumbnail: "/imagenProductoA.jpg",
  code: "P001",
  stock: 5,
});

productManager.addProduct({
  title: "Producto B",
  description: "Descripcion de Producto B",
  price: 20,
  thumbnail: "/imagenProductoB.jpg",
  code: "P003",
  stock: 10,
});

/*Obtener los productos */

const productsList = productManager.getProducts();
//console.log(productsList);

//Obtener producto por su ID

//const productoId = productManager.getProductById(2);
//console.log(productoId);

//Obtener producto inesistente
const noProduct = productManager.getProductById(8);
