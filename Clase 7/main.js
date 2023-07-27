const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Comision 55525");
});

app.get("/Welcome", (req, res) => {
  res.send("welcome");
});
app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(8080, () => {
  console.log("Servidor is runing on port 8080");
});
