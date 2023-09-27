const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-Parser");
const handlebars = require("express-handlebars");
const MongoStore = require("connect-mongo");
const usuarioRouter = require("./routes/usuarios.router");
const viewsRouter = require("./routes/views");
//const User = require("./models/user.model");
//const { createHash } = require("../utils");

//const mongoosePaginate = require("mongoose-paginate-v2");

const app = express();
const port = 8080;
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "src/views");
app.set("view engine", "handlebars");

app.use("/api/usuarios", usuarioRouter);

/* app.post("/register", async (req, res) => {
  let { first_name, last_name, email, age, password } = req.body;
  if (!first_name || !last_name || !email || !age || !password) {
    return res
      .status(400)
      .send("Error de registro, completar todos los campos");
  }

  //con el hashedPassword lo uqe hago es que me cree un cifrado en la base de datos ocultando el la contraseña.
  const hashedPassword = createHash(password);
  let user = await User.create({
    first_name,
    last_name,
    email,
    age,
    password: hashedPassword,
  });
  res.send({ status: "success", payload: user });
  console.log("User created" + user);
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  const { first_name, last_name, email, age } = req.session.user;
  console.log(first_name, last_name, email, age);
  res.render("profile", { first_name, last_name, email, age });
  console.log("Usuario inicio session");
});

app.get("/login", (res, req) => {
  const { email, password } = req.body;
  if (!req.session.user) {
    res.render("login");
  } else {
    res.render("/views/profile");
  }
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
