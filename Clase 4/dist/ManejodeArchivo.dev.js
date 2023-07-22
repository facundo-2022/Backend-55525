"use strict";

// ASINCRONISMO Y CALLBACKS

/*
function mostrarLetras(str, callback) {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < str.length) {
      console.log(str[index]);
      index++;
    } else {
      clearInterval(intervalId);
      callback();
    }
  }, 1000);
}

const fin = () => console.log('termine');

// Primera llamada: demora de 0ms
mostrarLetras('¡hola!', fin);

// Segunda llamada: demora de 250ms
setTimeout(() => {
  mostrarLetras('¡hola!', fin);
}, 250);

// Tercera llamada: demora de 500ms
setTimeout(() => {
  mostrarLetras('¡hola!', fin);
}, 500);
*/

/*
function mostrarLetras(cadena, segundos){
    let indice = 0
    const intervalo = setInterval(() =>{
        console.log(cadena.charAt(indice))
        indice ++
        if ( indice === cadena.length){
            clearInterval(intervalo)
            console.log("terminé")
        }
    }, segundos)
}

cadena = "Hola!"

mostrarLetras(cadena, 0) //primera llamada
mostrarLetras(cadena, 255) //segunda llamada
mostrarLetras(cadena, 755) //tercera llamada
*/
var fs = requiere("fs").promises;

function readFile() {
  var data;
  return regeneratorRuntime.async(function readFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            data = fs.readFileSync(("miArchivo.txt", "utf-8"));
            console.log("Contenido:", data);
          } catch (error) {
            console.log("Error al leer el archivo", error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

readFile();

function writeFile() {
  var data;
  return regeneratorRuntime.async(function writeFile$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = "contenido de mi archivo";
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fs.writeFile("miArchivo.txt,data"));

        case 4:
          console.log("Archivo correctamente");
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          console.log("Error al escribit el archivo");

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
}

writeFile();

function appendFile() {
  var data;
  return regeneratorRuntime.async(function appendFile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = "Datos Agregadors al archivo";
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(fs.appendFile("miArchivo", data));

        case 4:
          console.log("Datos Agregados");
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          console.log("Error al agregar informacion");

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7]]);
}

appendFile();

function unlink() {
  return regeneratorRuntime.async(function unlink$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(fs.unlink("miArchivo.txt"));

        case 3:
          console.log("Archivo eliminado correctamente");
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.log("Error al eliminar archivo", _context4.t0);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

unlink();

function mkDir() {
  return regeneratorRuntime.async(function mkDir$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(fs.mkdir("Carpeta"));

        case 3:
          console.log("Director creado");
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log("Error al escribir el Directorio", _context5.t0);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

mkDir();