"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var app = (0, _express["default"])();
var port = 8080;
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
app.use(_express["default"].json()); //Array de mascotas

var pets = []; //Middleware para validar que el nombre de la mascota solo contenga letras y espacios

var validatePetName = function validatePetName(req, res, next) {
  var petName = req.params.pet;

  if (/^[a-zA-Z\s]+$/.test(petName)) {
    req.petName = petName;
    next();
  } else {
    res.status(400).json({
      error: "Debe contener letras y espacios"
    });
  }
}; //Middleware para buscar una mascota por el nombre


var findPetByName = function findPetByName(req, res, next) {
  var pet = pets.find(function (p) {
    return p.name === req.petName;
  });

  if (pet) {
    req.pet = pet;
    next();
  } else {
    res.status(404).json({
      error: "Mascota no encontrada"
    });
  }
}; //Endpoint POST para insertar una nueva mascota


app.post("/", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      specie = _req$body.specie;

  if (!name || !specie) {
    return res.status(400).json({
      error: "Debe ingresa nombre o especie de la mascota"
    });
  }

  var newPet = {
    name: name,
    specie: specie
  };
  pets.push(newPet);
  res.status(201).json(newPet);
}); //Endpoint GET para obtener mascota por el nombre

app.get("/:pet", validatePetName, findPetByName, function (req, res) {
  res.json(req.pet);
}); //Endpoint PUT para marcar una mascota como adoptada

app.put("/:pet", validatePetName, findPetByName, function (req, res) {
  req.pet.adopted = true;
  res.json({
    mensaje: "Mascota marcada como adoptada"
  });
});