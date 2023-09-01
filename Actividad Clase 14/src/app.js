const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.router.js");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Serving is running on port ${port}`);
});

app.use(express.json());
//Enlace de conexion con mongoose atlas

mongoose
  .connect("")
  .then(() => {
    console.log("Conectado a la BD de Mongo Atlas");
  })
  .catch((error) => console.error("Error en la conexion"));

//esto es lo que vamos a consumir de routes
app.use("/api/colegio", userRouter);
