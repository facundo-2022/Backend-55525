const { Router } = require("express");
const { cartModel } = require("../models/carts.model");
const mongoosePaginate = require("mongoose-paginate-v2");

const router = Router();

router.delete("/api/carts/:cid/products/:pid", async (req, res) => {});

router.post("/api/carts/:cid", async (req, res) => {
  let { products, quantity } = req.body;
  if (!products || !quantity) {
    res.send({ status: "error", error: "Missing body params" });
  }

  let result = await cartModel.create({ products, quantity });
  console.log(result);
  res.send({ result: "success", payload: result });
});

router.put("/api/carts/:cid/products/:pid", async (req, res) => {});

router.delete("/api/carts/:cid", async (req, res) => {});

module.exports = router;
