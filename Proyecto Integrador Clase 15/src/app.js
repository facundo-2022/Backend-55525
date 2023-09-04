const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.router.js");
const productRouter = require("./routes/products.router");
const { userModel } = require("..//src/models/user.model");
const { productModel } = require("..//src/models/products.model");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Serving is running on port ${port}`);
});

app.use(express.json());
//Enlace de conexion con mongoose atlas

mongoose
  .connect(
    "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado con mi base de datos");
  })
  .catch((error) => console.error("Error en la conexion"));

//esto es lo que vamos a consumir de routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
