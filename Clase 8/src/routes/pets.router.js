//DEntro de este archivo van los endpoints
import express from "express";

const router = express.Router();

const pets = [];

// Aca debajo van los Endpoints

router.get("/api/pets", (req, res) => {
  res.json(pets);
});

router.post("/api/pets", (req, res) => {
  const newPet = req.body;
  pets.push(newPet);
  res.json({ message: "Mascota Agregada" });
});

export default router;
