//Operador Exponencial

/*let resultado = 2 ** 3;
//console.log(resultado);

let base = 5;
let exponente = 2;

let resultado2 = base ** exponente;

//console.log(resultado2);
let resultado3 = 2 ** (3 ** 2);
console.log(resultado3);
*/
//ARRAY.INCLUDES

/*
//Permite comprobas si un elemento espesifico esta dentro de un arreglo pero lo que nos va a retornar es un true o false, si esta incluido o no en el arreglo

const numbers = [1, 2, 3, 4, 5];
//console.log(numbers.includes(3));
//console.log(numbers.includes(8));

const fruits = ["Apple", "Orange", "Grapes"];
//console.log(fruits.includes("Banana"));
//console.log(fruits.includes("Apple"));

//Nos sierve para recorrer el array para uno o mas elementos

*/
//OPERADOR NULLISH (Simbolo del operador nullish es "??") // nos aseguramos de que no nos arroje ese error en un arrat vacio

/*const nombre = null; // como no tiene valor toma el valor por defecto, en caso de que la variable nombre tenga valor toma ese mismo

const nombrePorDefecto = "CoderHose";

const nombreCompleto = nombre ?? nombrePorDefecto;

console.log(nombreCompleto);   

const cantidad = null;
const cantidadPorDefecto = 20;
const cantidadFinal = cantidad ?? cantidadPorDefecto;

//console.log(cantidadFinal);*/
//OBJET.ENTRIES - OBJECT.KEYS - OBJECT.VALUES
//nos sirve para interactuar con un objeto

/*
const estudiante = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Cordoba",
};

const valores = Object.values(estudiante); // me arroja las propiedades directamente que tiene el estudiante.
const valores2 = Object.entries(estudiante); // me arroja clave valor de las distintas propiedades.
const valores3 = Object.keys(estudiante); // me arroja solamente las claves seria nombre edad y cuidad sin sus valores.
console.log(valores3);
*/
//FINALLY()
// Los 3 estados de las promesas pending resolve y reject

/*
function ejemploPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false;

      if (exito) {
        resolve("Exito");
      } else {
        reject("Error");
      }
    }, 5000);
  });
}

ejemploPromesa()
  .then((resultado) => {
    console.log(resultado);
  })

  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log("Promesa Finalizada");
  });// el Finally siempre se ejecuta.
*/
//SPREAD OPERATOR (simbolo del spread operator es los ...)

/*const numeros = [1, 2, 3, 4, 5];
const nuevosNumeros = [...numeros, 6, 7, 8, 9, 10];

console.log(nuevosNumeros);*/
//REST OPERATOR

/*
function sumar(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

//console.log(sumar(1, 2, 3));

function imprimirDatos(persona, ...datosExtras) {
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log("Otros datos:" + datosExtras.join(",")); // el join lo utilizamos para traer distintos datos de un array
}
const persona = {
  nombre: "coder",
  edad: 30,
};

imprimirDatos(persona, "altura: 200cm", "Peso: 200kg");
*/
//Entonces nos permite rest operator traer informacion que ya esta declarada en otro momento.
"use strict";