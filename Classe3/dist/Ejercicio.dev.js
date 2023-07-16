/*const obtenerDatos = new promise((resolve, reject) => {
  setTimeout(() => {
    const datos = { mensaje: "datos obtenidos" };
    resolve(datos);
  }, 5000);
});

obtenerDatos
  .then((resultado) => {
    console.log(resultado.mensaje);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });*/
// TIMERs - setTimeOut - SetInterval

/*setTimeout(() => {
  console.log("Mensaje de 5 seg");
}, 5000);
*/

/*let contador = 0;
setInterval(() => {
  contador++;
  console.log(
    contador en: ${contador}
  );

  if(contador === 10){
    clearInterval(intervalo)
    console.log("Intervalo detenido")
  }
}, 1000);
*/
//Test this fuction

/*async function obtenerDatos() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const datos = await response.json();
  console.log(datos);
}
obtenerDatos();*/
"use strict";