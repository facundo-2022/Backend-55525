const express = require("express");
const router = express.Router();

// Array de productos
const products = [];

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
  products.push(newProduct);

  res.json({ message: "Producto agregado correctamente." });
});

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

module.exports = router;
