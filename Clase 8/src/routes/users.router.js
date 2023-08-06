//DEntro de este archivo van los endpoints
import express from "express";

const router = express.Router();

const users = [];

// Aca debajo van los Endpoints

router.get("/api/users", (req, res) => {
  res.json(users);
});

router.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "Usuario Agregado" });
});

export default router;
