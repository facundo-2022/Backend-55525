const passport = require("passport");
const local = require("passport-local");
const userService = require("../models/user.model");
const { createHash, isValidatePassword } = require("../../utils");
const GitHubStrategy = require("passport-github2");

const localStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "github",
    new GitHubStrategy(
      {
        clientID: "Iv1.f26e4f1f954a0d52",
        clientSecret: "481456f66b327ccccb6c701d5717c5b97784e6db",
        callbackURL: "http://localhost:8080/api/usuarios/githubcallback",
      }, // para usarlo necesitamos declarar unas parametros que son los tres que estan ahi, y desde la pagina de github copiamos el clientId cuando creamos la app. client Secret lo creamos cuando generamos el new el clientSecret desde github
      async (accessToken, refreshToken, profile, done) => {
        try {
          //try y catch para validar los datos que tenga sean los que necesito
          console.log(profile);
          //aca ponemos los datos del usuario, el user service lo llamo desde el user.model
          let user = await userService.findOne({ email: profile._json.email });
          if (!user) {
            let newUser = {
              first_name: profile._json.name, //esto es lo que viene del profile
              last_name: "", // este no me lo proporciona github y al ser un vacio me permite para plasmarlo en mi basedate
              age: 20,
              email: profile._json.email,
              password: "", // el passwor es una validacion de tercero y no lo necesitamos por eso ponemos un string vacio
            };
            let resultado = await userService.create(newUser); //esto es para crear un nuevo usuario
            done(null, resultado); //con el don le digo que no hay errores y que nos muestre el resultado
          } else {
            done(null, user); //y si ya esta registrado que me confirme
          }
        } catch (error) {
          return done(error); // el catch si tengo un error coloco el done para que me retorne el error
        }
      }
    )
  );
};

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await userService.findById(id);
  done(null, user);
});

passport.use(
  "login",
  new localStrategy(
    { usernameField: "email" },
    async (username, password, done) => {
      try {
        const user = await userService.findOne({ email: username });
        if (!user) {
          return done(null, false);
        }
        if (!isValidatePassword(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = initializePassport;
