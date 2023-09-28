const express = require("express");
const router = express.Router();
const usuario = require("../models/user.model");
const { createHash, isValidatePassword } = require("../../utils");
const passport = require("passport");
//const jwt = require("jsonwebtoken");

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/register", async (req, res) => {
  res.render("register");
});

router.get("/profile", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("login");
  }

  const { first_name, last_name, email, age } = req.session.user;

  res.render("profile", { first_name, last_name, age, email });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).render("login", { error: "Valores erroneos" });

  const user = await usuario.findOne(
    { email },
    { first_name: 1, last_name: 1, age: 1, password: 1, email: 1 }
  );

  if (!user) {
    return res.status(400).render("login", { error: "Usuario no encontrado" });
  }

  if (!isValidatePassword(user, password)) {
    return res.status(401).render("login", { error: "Error en password" });
  }

  /*   req.session.user = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    age: user.age,
  };
 */

  res.redirect("/api/usuarios/profile");
});

router.get("/logout", async (req, res) => {
  delete req.session.user;
  res.redirect("login");
});

router.get("/faillogin", async (req, res) => {
  console.log("Hubo un error en la autenticación");
  res.send({ error: "Error en la autenticación" });
});
//en esta ruta vamos a capturar el mail del user.
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  async (req, res) => {}
);

//el failureRedirect es la opcion pra que nos envie a una page en el caso de que no este definido como usuario
router.get(
  "/githubcallback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  async (req, res) => {
    req.session.user = req.user;
    res.redirect("/api/usuarios/profile");
  }
);

/* router.get("/profile", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("login");
  }

  const { first_name, last_name, email, age } = req.session.user;

  res.render("profile", { first_name, last_name, age, email });
}); */

module.exports = router;
