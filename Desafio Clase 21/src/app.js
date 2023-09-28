const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const MongoStore = require("connect-mongo");
const usuarioRouter = require("./routes/usuarios.router");
const passport = require("passport");
const initializePassport = require("./config/passport.config");

const port = 8080;
const app = express();

mongoose.connect(
  "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 600,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: true,
  })
);

initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/usuarios", usuarioRouter);

app.get("/", (req, res) => {
  res.send("Express Sessions!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
