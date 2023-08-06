//Router

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

//Agregar path public

app.use("/static,", express.static("__dirname + public"));

//Routing
app.use("/", usersRouter);
app.use("/", petsRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/././public", "index.html");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
