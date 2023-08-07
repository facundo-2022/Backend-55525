/*//Router

//Codigo para levantar el servidor
import express from "express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
//import __dirname from ""
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Agregar path public

app.use("/static,", express.static("__dirname + public"));

//Routing

//Cada vez que utilizamos un app.use siempre hacemos referencia a un middleware, son funciones que se ejecutan antes de llegar al endpoint.
app.use("/", usersRouter);
app.use("/", petsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});*/

const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //el diskstorage le da un destino que necesita un req un file y un cb que es una devolucion de llamado como el callback.

    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const timestamp = date.now();
    const originalname = file.originalName;
    cb(null, `${timestamp}-$originalname}`);
  },
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

const upload = multer({
  storage,
});

app.use(express.static(path.join(__dirname, "public")));

//manejo subida de archivo

app.post("/uploads", upload.single("archivo"), (req, res) => {
  res.json({ mensaje: "Archivo subido exitosamente" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
/*app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});*/
