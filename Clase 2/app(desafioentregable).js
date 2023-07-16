class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  getProducts = () => {
    return this.products;
  };

  // Agrego producto con la funcion addProduct
  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }
    product.id = this.nextId++;
    this.products.push(product);
  };

  // Obtengo dos cosas el ID que busco y tambien me da el resultado de ID no encontado.
  getProductById = (id) => {
    const product = this.products.find((e) => e.id === id);

    if (product) {
      console.log("ID encontrado, el producto ya existe ");
      return product;
    } else {
      console.log("Error: ID no fue Encontrado");
      return;
    }
  };

  // Valido el codigo de los producto en caso de existir me devuevlo un error, caso contrario puedo agregar nuevo producto.
  validarcode = (idCode) => {
    const codeId = this.products.findIndex((e) => e.code === idCode);

    if (codeId === -1) {
      console.log("El codigo no se repite, Agregar nuevo Producto");
      return;
    } else {
      console.log("Error: El codigo del producto ya existe");
      return;
    }
  };
}

const productosAgregado = new ProductManager();

productosAgregado.addProduct(
  "T48",
  "Temp. Elemt. LPT Inlet Gas",
  200,
  NaN,
  15002,
  10
);
productosAgregado.addProduct(
  "T3",
  "Temp. Elemt. HP Compressor Discharge",
  500,
  NaN,
  25639,
  20
);
productosAgregado.addProduct(
  "XN25",
  "Speed Elemt. HPC Magnetic Pickup",
  500,
  NaN,
  19458,
  2
);
productosAgregado.addProduct(
  "P48",
  "Pressure Trans. LP Turbine Inlet",
  200,
  NaN,
  15002,
  10
);

//Consulto la lista de los productos
const ListaProducto = productosAgregado.getProducts();
console.log(ListaProducto);

//Verifico a travez de code si existe los productos.
productosAgregado.validarcode(15001);
productosAgregado.validarcode(22500);

//Obtengo el producto por su ID y tambien si no existe
const productoId = productosAgregado.getProductById(4);
console.log(productoId);
