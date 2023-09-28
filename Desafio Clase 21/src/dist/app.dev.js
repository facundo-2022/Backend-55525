"use strict";

var express = require("express");

var mongoose = require("mongoose");

var session = require("express-session");

var bodyParser = require("body-parser");

var handlebars = require("express-handlebars");

var MongoStore = require("connect-mongo");

var usuarioRouter = require("./routes/usuarios.router");

var passport = require("passport");

var initializePassport = require("./config/passport.config");

var port = 8080;
var app = express();
mongoose.connect("mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority",
    mongoOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    ttl: 600
  }),
  secret: "coderhouse",
  resave: false,
  saveUninitialized: true
}));
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/api/usuarios", usuarioRouter);
app.get("/", function (req, res) {
  res.send("Express Sessions!");
});
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.listen(port, function () {
  return console.log("Server listening on port ".concat(port, "!"));
});