"use strict";

var express = require("express");

var mongoose = require("mongoose");

var session = require("express-session");

var bodyParser = require("body-parser");

var handlebars = require("express-handlebars");

var MongoStore = require("connect-mongo");

var usersRouter = require("./routes/users.router");

var passport = require("passport");

var initializePassport = require("./config/passport.config");

var app = express();
mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  store: MongoStore.create({
    mongoUrl: "",
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
app.use("/api/sessions", usersRouter);
app.get("/", function (req, res) {
  res.send("Express Sessions!");
});
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.listen(8080, function () {
  console.log("Servidor en ejecución en el puerto 8080");
});