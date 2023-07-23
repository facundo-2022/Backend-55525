class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  getProducts = () => {
    return this.products;
  };

  // Agrego producto con la funcion addProduct
  addProduct(product) {
    //= (title, description, price, thumbnail, code, stock) => {
    /*const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };*/
    if (!this.validarcode(product)) {
      console.log("Advertencia: EL producto no es Valido");
      return;
    }
    if (this.codeRepeat(product.code)) {
      console.log("Error: El codigo del producto ya esta siendo utilizado");
      return;
    }
    product.id = this.products.length; // Aca hice la correccion no se si es a lo que tereferias pero funciono.
    this.products.push(product);
  }

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
  validarcode(product) {
    return (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock !== undefined
    );
  }
  codeRepeat(code) {
    return this.products.some((p) => p.code === code); // la funcion some nos garantiza que el no haya al menos un valor del array repetido.
  }
}

const productosAgregado = new ProductManager();

productosAgregado.addProduct({
  title: "T48",
  description: "Temp. Elemt. LPT Inlet Gas",
  price: 1500,
  thumbnail: 18,
  code: 15008,
  stock: 102,
});
productosAgregado.addProduct({
  title: "T3",
  description: "Temp. Elemt. HP Compressor Discharge",
  price: 500,
  thumbnail: 16,
  code: 15009,
  stock: 20,
});
productosAgregado.addProduct({
  title: "XN25",
  description: "Speed Elemt. HPC Magnetic Pickup",
  price: 300,
  thumbnail: 15,
  code: 19458,
  stock: 2,
});
productosAgregado.addProduct({
  title: "P48",
  description: "Pressure Trans. LP Turbine Inlet",
  price: 100,
  thumbnail: 12,
  code: 15002,
  stock: 10,
});

//Consulto la lista de los productos
const ListaProducto = productosAgregado.getProducts();
console.log(ListaProducto);

//Obtengo el producto por su ID y tambien si no existe
//const productoId = productosAgregado.getProductById(4);
//console.log(productoId);
