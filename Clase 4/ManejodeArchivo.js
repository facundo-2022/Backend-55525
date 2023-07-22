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

const fs = requiere("fs").promises;

async function readFile() {
  try {
    const data = fs.readFileSync(("miArchivo.txt", "utf-8"));
    console.log("Contenido:", data);
  } catch (error) {
    console.log("Error al leer el archivo", error);
  }
}

readFile();

async function writeFile() {
  const data = "contenido de mi archivo";

  try {
    await fs.writeFile("miArchivo.txt,data");
    console.log("Archivo correctamente");
  } catch (error) {
    console.log("Error al escribit el archivo");
  }
}

writeFile();

async function appendFile() {
  const data = "Datos Agregadors al archivo";

  try {
    await fs.appendFile("miArchivo", data);
    console.log("Datos Agregados");
  } catch (error) {
    console.log("Error al agregar informacion");
  }
}

appendFile();

async function unlink() {
  try {
    await fs.unlink("miArchivo.txt");
    console.log("Archivo eliminado correctamente");
  } catch (error) {
    console.log("Error al eliminar archivo", error);
  }
}

unlink();

async function mkDir() {
  try {
    await fs.mkdir("Carpeta");
    console.log("Director creado");
  } catch (error) {
    console.log("Error al escribir el Directorio", error);
  }
}

mkDir();
