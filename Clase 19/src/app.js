const express = require("express");
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars");
const session = require("express-session");
const sessionRouter = require("../src/routes/sessions");
const MongoStore = require("connect-mongo");
const viewsRouter = require("../src/routes/views");
const app = express();
const port = 8080;

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://facundom:Amparo.23@cluster0.ko8l77a.mongodb.net/?retryWrites=true&w=majority",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 1000,
    }),
    secret: "coderHouse",
    resave: false,
    saveUninitialized: true,
  })
);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "routes/views");
app.set("view engine", " handlebars");
app.use("/api/sessions", sessionRouter);
app.use("/", viewsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
