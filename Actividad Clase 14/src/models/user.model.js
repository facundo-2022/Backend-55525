const mongoose = require("mongoose");

const userCollection = "estudiantes";

//El esquema de modelado de como van a lucir los datos

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true, max: 100 },
  apellido: { type: String, required: true, max: 100 },
  edad: { type: Number, required: true, max: 100 },
  dni: { type: Number, required: true, max: 100, unique: true },
  curso: { type: String, required: true, max: 100 },
  nota: { type: Number, required: true, max: 100 },
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = { userModel };
