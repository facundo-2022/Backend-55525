const { Router } = require("express");
const { productModel } = require("../models/products.model");
const mongoosePaginate = require("mongoose-paginate-v2");

const router = Router();

//cuando usamos mongoose se utilizan funciones asincronas (async), el payload es la informacion que nos va a venir
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

router.get("/products", async (req, res) => {
  try {
    const { page, limit, filter, sort } = req.query;
    const priceSort = sort ? parseInt(sort) : 1;
    const serch = filter;
    const options = {
      page: page || 1, // Página actual
      limit: limit || 10, // Cantidad de resultados por página
      sort: { price: priceSort }, // Ordenar por precio
    };
    const product = await productModel.paginate(serch, options);
    res.send({ result: "success", payload: product });
  } catch (error) {
    console.log(error);
  }
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
