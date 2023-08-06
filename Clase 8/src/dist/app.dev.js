"use strict";

var _express = _interopRequireDefault(require("express"));

var _usersRouter = _interopRequireDefault(require("./routes/users.router.js"));

var _petsRouter = _interopRequireDefault(require("./routes/pets.router.js"));

var _path = _interopRequireDefault(require("path"));

var _url = require("url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Router
//Codigo para levantar el servidor
//import __dirname from ""
var _dirname = _path["default"].dirname(__filename);

var app = (0, _express["default"])();
var PORT = 8080; //Agregar path public

app.use("/static,", _express["default"]["static"]("__dirname + public")); //Routing

app.use("/", _usersRouter["default"]);
app.use("/", _petsRouter["default"]);
app.get("/", function (req, res) {
  res.sendFile(_dirname + "/public/index.html");
});
app.listen(PORT, function () {
  console.log("server listening on port ".concat(PORT));
});