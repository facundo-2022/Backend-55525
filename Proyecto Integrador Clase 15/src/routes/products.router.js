const { Router } = require("express");
const { productModel } = require("../models/products.model");
const mongoosePaginate = require("mongoose-paginate-v2");

const router = Router();

//cuando usamos mongoose se utilizan funciones asincronas (async), el payload es la informacion que nos va a venir
router.get("/products", async (req, res) => {
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
});

/* router.get("/products", async (req, res) => {
  const filter = req.query.filter;

  let products = await productModel.paginate({ category: filter });
  console.log(products);
  res.send({ result: "success", payload: products });
}); */

router.post("/", async (req, res) => {
  let { name, category, price, stock, image } = req.body;
  if (!name || !category || !price || !stock || !image) {
    res.send({ status: "error", error: "Faltan parametros" });
  }

  let result = await productModel.create({
    name,
    category,
    price,
    stock,
    image,
  });
  res.send({ result: "success", payload: result });
});

router.put("/:uid", async (req, res) => {
  let { uid } = req.params;

  let userToReplace = req.body;
  if (
    !userToReplace.name ||
    !userToReplace.category ||
    !userToReplace.price ||
    !userToReplace.stock ||
    !userToReplace.image
  ) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }

  let result = await productModel.updateOne({ _id: uid }, userToReplace);
  res.send({ result: "success", payload: result });
});

router.delete("/:uid", async (req, res) => {
  let { uid } = req.params;
  let result = await productModel.deleteOne({ _id: uid });
  res.send({ result: "success", payload: result });
});
// la descripcion es para el el app.js pueda consumir lo de este archivo
module.exports = router;
