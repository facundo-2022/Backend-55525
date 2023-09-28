const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { createHash, isValidatePassword } = require("../../utils");
router.post("/register", async (req, res) => {
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
  //res.redirect("/login");
});

router.get("/profile", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("login");
  }
  const { first_name, last_name, email, age } = req.session.user;
  console.log(first_name, last_name, email, age);
  res.render("profile", { first_name, last_name, email, age });
  console.log("Usuario inicio session");
});

/* router.get("/login", (res, req) => {
  const { email, password } = req.body;
  if (!req.session.user) {
    res.render("login");
  } else {
    res.render("/views/profile");
  }
});
 */
//En el login si los datos el email y password no son correctos tirar un erro de datos.
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .render("login", { error: "Datos el usuario incorrecto" }); //verifico si los datos son correcto     }

  //En la variable user voy a consultar los datos del usuario y ver si existe
  const user = await user.findOne(
    { email },
    { first_name: 1, last_name: 1, email: 1, age: 1, password: 1 }
  );
  //con la condicion verifico si si el usuario es el correcto
  if (!user) {
    return res.status(400).render("login", { error: "Usuario invalido" });
  }
});

router.get("/logout", async (req, res) => {
  delete req.session.user;
  res.redirect("login");
});

router.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (email !== "adminCoder@coder.com" || password !== "adminCod3r123") {
    return res.send("email o contraseña invalida");
  }
  req.session.user = email;
  (req.session.admin = true), //si vemos admin en true le damos todo los privilegio a este usuario.
    res.send("Acceso Satisfactorio, permiso de admin ");
});
module.exports = router;
