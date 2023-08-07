const express = require("express");
const router = express.Router();

let food = [
  { name: "Hamburguesa", price: 1000 },
  { name: "Lomo", price: 2000 },
  { name: "Picada", price: 3000 },
];

router.get("/", (req, res) => {
  let testUser = { name: "Juan", lastname: "Perez", role: "admin" };

  res.render("index", {
    user: testUser,
    isAdmin: testUser.role === "admin",
    food,
  });
});
