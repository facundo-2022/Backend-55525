"use strict";

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
var express = require("express");

var multer = require("multer");

var path = require("path");

var app = express();
var PORT = 8080;
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    //el diskstorage le da un destino que necesita un req un file y un cb que es una devolucion de llamado como el callback.
    cb(null, "uploads");
  },
  filename: function filename(req, file, cb) {
    var timestamp = date.now();
    var originalname = file.originalName;
    cb(null, "".concat(timestamp, "-$originalname}"));
  }
});
app.listen(PORT, function () {
  console.log("server listening on port ".concat(PORT));
});
var upload = multer({
  storage: storage
});
app.use(express["static"](path.join(__dirname, "public"))); //manejo subida de archivo

app.post("/uploads", upload.single("archivo"), function (req, res) {
  res.json({
    mensaje: "Archivo subido exitosamente"
  });
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
/*app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});*/