const express = require('express');
const http = require('http');
const sockerIo =  require('sockert.io');
const path = require('path');
const { server} = require('socket.io');
const handlebars = require('express-handlebars');
const swal = require('sweetalert2');


const app = express();
const server = http.createServer(app)
const io = new Server (server);

app.engine("handlebars", handlebars.engine())
app.set("views",__dirname + "/views")
app.set("view engine", "handlebars")
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.render("index.hbs")
})

const users = {}

io.on("connection",(socket)=>{
    console.log("un usuario se ha conectado")
    socket.on("new-user", (usernames)=>{}
    users[]
})