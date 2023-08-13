const fs = require("fs");
const express = require("express");
const router = express.Router();
class Contenedor {
  constructor(file) {
    /*el contructor recibe un archivo file*/
    this.file = file; /*con el this hacemos referencia a ese archivo file*/
  }

  async save(obj) {
    try {
      const objects = await this.getAllObjects();
      const lastId =
        objects.length > 0
          ? objects[objects.length - 1].id
          : 0; /*alternario si es mayor a 0 volvemos a objects my incrementamos lo que esta entre corchete.*/
      const newId = lastId + 1;
      const newObj = {
        id: newId,
        ...obj,
      }; /*utilizamos el spread operator para traer lo que tenemos en obj.*/
      objects.push(newObj);
      await this.saveObjects(objects);
      return newId;
    } catch (error) {
      throw new Error("Error saving objects");
    }
  }

  async getById(id) {
    try {
      const objects = await this.getAllObjects();
      const obj = objects.find((o) => o.id === id);
      return obj || null;
    } catch (error) {
      throw new Error("Error al obtener el id");
    }
  }

  async getAll() {
    try {
      const objects = await this.getAllObjects();
      return objects;
    } catch (error) {
      throw new Error("Error al obtener los objectos");
    }
  }

  async deleteById(id) {
    try {
      let objects = await this.getAllObjects();
      objects = objects.filter((o) => o.id !== id);
      await this.saveObjects(objects);
    } catch (error) {
      throw new Error("Error al eliminar el objecto");
    }
  }

  async deleteAll() {
    try {
      await this.saveObjects([]);
    } catch (error) {
      throw new Error("Error al eliminar los objetos");
    }
  }

  async getAllObjects() {
    try {
      const data = await fs.promises.readFile(this.file, "utf8");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  }

  async saveObjects(objects) {
    try {
      await fs.promises.writeFile(this.file, JSON.stringify(objects, null, 2));
    } catch (error) {
      throw new Error("Error al guardar objetos");
    }
  }
}
const main = async () => {
  const productos = new Contenedor("productos.txt");
// obtener todos los productos
router.get("/api/products", (req, res) => {
  res.json({ products });
});

//  obtener un producto específico
router.get("/api/products/:pid", (req, res) => {
  const pid = parseInt(req.params.pid);
  console.log(pid);

  const product = products.find((product) => product.id === pid);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado." });
  }

  return res.json(product);
});

// agregar un nuevo producto
router.post("/api/products", (req, res) => {
  
    const newProduct = req.body;
    const id = await productos.save(newProduct);

    res.json({ message: "Producto agregado correctamente." });
  }
);

function generateUniqueId() {
  return Date.now().toString();
}

//  actualizar un producto por su ID
router.put("/api/products/:pid", (req, res) => {
  const pid = parseInt(req.params.pid);
  const updateFields = req.body;

  // Validamos los campos
  if (Object.keys(updateFields).length === 0) {
    return res
      .status(400)
      .json({ error: "Debe proporcionar al menos un campo para actualizar." });
  }

  const productIndex = products.findIndex((product) => product.id === pid);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado." });
  }

  products[productIndex] = {
    ...products[productIndex],
    ...updateFields,
  };

  return res.json(products[productIndex]);
});

//  eliminar un producto por su ID
router.delete("/api/products/:pid", (req, res) => {
  const pid = parseInt(req.params.pid);

  const productIndex = products.find((product) => product.id === pid);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado." });
  }

  const deletedProduct = products.splice(productIndex, 1);

  return res.json(deletedProduct[0]);
});
}
module.exports = router;
