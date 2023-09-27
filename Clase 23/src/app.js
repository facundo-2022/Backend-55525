/* import express from "express";
const app = express();
const port = 8080;
app.use(express.json());
const pets = [];

const validatePetName = (req, res, next) => {
  const petName = req.params.pet;
  if (/^[a-zA-Z\s]+$/.test(petName)) {
    req.petName = petName;
    next();
  } else {
    res.status(400).json({ error: "Debe contener letras y espacio" });
  }
};

const findPetByName = (req, res, next) => {
  const pet = pets.find((p) => p.name === req.petName);
  if (pet) {
    req.pet = pet;
    next();
  } else {
    res.status(404).json({ error: "Mascota no encontrada" });
  }
};

app.post("/", (req, res) => {
  const { name, specie } = req.body;
  if (!name || !specie) {
    return res
      .status(404)
      .json({ error: "debe ingresar nombre o especie de la mascota " });
  }
  const newPet = { name, specie };
  pets.push(newPet);
  res.status(201).json(newPet);
});

app.get("/:pet", validatePetName, findPetByName, (req, res) => {
  res.json(req.pet);
});

app.put("/:pet", validatePetName, findPetByName, (req, res) => {
  req.pet.adopted = true;
  res.json({ Message: "Mascota como adoptada" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); */

import express from "express";

const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.json());

//Array de mascotas

const pets = [];

//Middleware para validar que el nombre de la mascota solo contenga letras y espacios

const validatePetName = (req, res, next) => {
  const petName = req.params.pet;

  if (/^[a-zA-Z\s]+$/.test(petName)) {
    req.petName = petName;

    next();
  } else {
    res.status(400).json({ error: "Debe contener letras y espacios" });
  }
};

//Middleware para buscar una mascota por el nombre

const findPetByName = (req, res, next) => {
  const pet = pets.find((p) => p.name === req.petName);

  if (pet) {
    req.pet = pet;

    next();
  } else {
    res.status(404).json({ error: "Mascota no encontrada" });
  }
};

//Endpoint POST para insertar una nueva mascota

app.post("/", (req, res) => {
  const { name, specie } = req.body;
  if (!name || !specie) {
    return res
      .status(400)
      .json({ error: "Debe ingresa nombre o especie de la mascota" });
  }

  const newPet = { name, specie };

  pets.push(newPet);

  res.status(201).json(newPet);
});

//Endpoint GET para obtener mascota por el nombre

app.get("/:pet", validatePetName, findPetByName, (req, res) => {
  res.json(req.pet);
});

//Endpoint PUT para marcar una mascota como adoptada

app.put("/:pet", validatePetName, findPetByName, (req, res) => {
  req.pet.adopted = true;

  res.json({ mensaje: "Mascota marcada como adoptada" });
});
