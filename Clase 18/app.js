const express = require("express");
const cookieParser = require("cookie-parser");
//const { request } = require("express");
//const session = require("express-session");
const fileStore = require("session-file-store"); // clase 19
const session = require("express-session");
const app = express();
const port = 8080;

const fileStorage = fileStore(session);
app.use(cookieParser());
app.use(
  session()({
    sotre: new FileStore({
      path: "./session",
      ttl: 100,
      retries: 0,
    }),
  })
); // aca dentro definimos el tiempo de vide, es decir el tiempo que el servidor va a tratar de leer el archivo con la informacion de la session y por otro lado va a tener la ruta donde va ir almacenado la info en la carpeta.

/* //implementacion del middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("coderSecret"));  //al momento de inicializar va a leer que esa cookie esta firmada y no la podemos alterar y debemos agregar en app.get("/setCookie") el signed: true

app.get("/setCookie", (req, res) => {
  res
    .cookie("coderCokie", "Cookie en mi navegador", {
      maxAge: 10000,
      signed: true,
    })
    .send("Cookie"); //tiene clave- valor, la clave seria coder y el valor cookie en mi navegador. el maxAge es un numero que hace referencia a la cantidad de miliseg que va a ser valida esta cookie.
}); // con el signed:true me aseguro de que la cookie este firmada.

app.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/deleteCookie", (req, res) => {
  res.clearCookie("coderCokie").send("Cookie eliminada");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/setCookie", (req, res) => {
  const { user } = req.body;
  res.cookie("user", user, { maxAge: 50000 }).send("cookie creado");
});

app.get("/getCookie", (req, res) => {
  const userCookie = req.cookies.user;
  console.log("My cookie", userCookie);

  res.send("Cookie Mostrar en consola");
});


// parte de session

app.use(
  session({
    secret: "secretCoder",
    resave: true, //resave te permite mantener sesiones activas en caso de que la session no se alla finalizado la session.
    saveUninitialized: true, // te permite guardar session aunque no tenga informacion o contenido.
  })
);

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Cantidad de visitas: ${req.session.counter}`);
  } else {
    req.session.counter = 1;
    res.send("Mensaje de Bienvenida"); // si no hay inicializacion de usuarios arrancan en uno.
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Logout");
    else res.send("Error al intentar salir");
  });
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username !== "felipe" || password !== "felipem") {
    return res.send("Nombre de usuario o contraseña invalida");
  }
  req.session.user = username;
  (req.session.admin = true), //si vemos admin en true le damos todo los privilegio a este usuario.
    res.send("Acceso Satisfactorio");
});

//middleware auth
function auth(req, res, next) {
  if (req.session?.user === "Andres" && req.session?.admin) {
    return next();
  }
  return res.status(401).send("Error de autenticacion");
} // para hacer peticion para hacer autenticacion.

app.get("/private", auth, (req, res) => {
  res.send("Eres el admin");
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
