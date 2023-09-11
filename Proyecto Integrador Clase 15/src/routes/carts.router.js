const { Router } = require("express");
const mongoosePaginate = require("mongoose-paginate-v2");

const router = Router();

module.exports = router;

router.delete("/api/carts/:cid/products/:pid", async (req, res) => {});

router.put("/api/carts/:cid", async (req, res) => {});

router.put("/api/carts/:cid/products/:pid", async (req, res) => {});

router.delete("/api/carts/:cid", async (req, res) => {});
