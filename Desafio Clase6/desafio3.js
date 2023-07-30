import express from "express";
import fs from "fs";

const app = express();

class Contenedor {
  constructor() {
    this.file = "producto.txt";
    if (!fs.existsSync(this.file)) {
      fs.writeFileSync(this.file, "[]");
    }
  }
  consultarListaProducto = async () => {
    const datosProducto = fs.promises.readFile(this.file, "utf-8");

    return datosProducto;
  };
}

const listaCompleta = new Contenedor();
// GET/PRODUCTO NOS DEVUELVE UN ARRAY CON LOS PRODUCTO
app.get("/productos", async (req, res) => {
  const limit = Number(req.query.limit);
  const Product = await listaCompleta.consultarListaProducto();
  if (limit) {
    const limitProduct = Product.slice(0, limit);
    return res.send(limitProduct);
  }

  return res.send(Product);
});

//Producto Random
app.get("/productosRandom", async (req, res) => {
  const productoAleatorio = await listaCompleta.consultarListaProducto();
  const aleatorio =
    productoAleatorio[Math.floor(Math.random() * productoAleatorio.length)];
  return res.send(aleatorio);
});

//Enlace de servidor
app.listen(8080, () => {
  console.log("Servidor is runing on port 8080");
});
