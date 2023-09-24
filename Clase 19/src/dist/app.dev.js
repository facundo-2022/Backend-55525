"use strict";

var express = require("express");

var cookieParser = require("cookie-parser");

var handlebars = require("express-handlebars");

var session = require("express-session");

var sessionRouter = require("../src/routes/sessions");

var MongoStore = require("connect-mongo");

var viewsRouter = require("../src/routes/views");

var app = express();
var port = 8080;
app.use(express.urlencoded({
  extended: true
}));
app.use(session({
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority",
    mongoOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    ttl: 1000
  }),
  secret: "coderHouse",
  resave: false,
  saveUninitialized: true
}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "routes/views");
app.set("view engine", " handlebars");
app.use("/api/sessions", sessionRouter);
app.use("/", viewsRouter);
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});