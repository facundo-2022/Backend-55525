/*function generarNumerosRandom() {
  const min = 1;
  const max = 20;
  const cantidadNumeros = 10000;
  const numerosRandom = [];

  for (let i = 0; i < cantidadNumeros; i++) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosRandom.push(numeroRandom);
  }

  return numerosRandom;
}

function contarRepeticiones(numeros) {
  const contador = {};
  numeros.forEach((numero) => {
    contador[numero] = (contador[numero] || 0) + 1;
  });
  return contador;
}

const numerosGenerados = generarNumerosRandom();
const contadorNumeros = contarRepeticiones(numerosGenerados);
console.log(numerosGenerados);
console.log(contadorNumeros);
*/
/*
function ramdomNumbers(min, max, q) {
  return Array.from(
    { length: q },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

const numbers = ramdomNumbers(1, 20, 10000);
console.log(numbers);

const results = {};
numbers.forEach((number) => (results[number] = (results[number] || 0) + 1));
console.log(results);
*/

// ARRAY DE OBJETOS
/*
const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

//Nombres de productos
const names = productos.map((producto) => producto.nombre).join(",");

console.log(names);

//Precio total
const totalPrice = productos
  .reduce((total, producto) => total + producto.precio, 0)
  .toFixed(2);
console.log(totalPrice);

//Precio Promedio
console.log(
  productos.reduce((acc, producto) => acc + producto.precio, 0) /
    productos.length
);

//Producto con menor precio
const minPrice = productos.reduce((min, producto) => {
  if (producto.precio < min) {
    min = producto.precio;
  }
  return min;
}, productos[0].precio);

console.log(minPrice);*/

//Producto con mayor precio
/*
const mayorPrecio = productos.reduce((maxPrecio, producto) => {
    return (producto.precio > maxPrecio) ? producto.precio : maxPrecio;
  }, productos[0].precio);
  
  console.log("Mayor precio:", mayorPrecio.toFixed(2));*/
/*
const higerPrice = productos.reduce((max, p) =>
  p.precio > max.precio ? p : max
);
console.log(higerPrice);
*/
// Ejercicio calculadora de edad.

import moment from "moment";

const fechaActual = moment();

const fechaNacimiento = moment("1991-08-01", "yyyy-MM-dd");

if (fechaNacimiento.isValid()) {
  console.log(` #años = ${fechaActual.diff(fechaNacimiento, "year")} años`);
  console.log(` #dias = ${fechaActual.diff(fechaNacimiento, "days")} dias`);
} else {
  console.log("no fue una fecha valida");
}

// DAtos para JSON actualizaciones y conceptos a tener encuenta.
// con la ~ solamente se actualizan los pacth del proyecto no le va a dar importancia a los demas versiones menores.
//^ si le agregamos eso se actualiza lasr version 0.13.0 a la 0.14.0 pero si pasa a la 1.0.1 no porque se puede romper el proyecto
/* pero si tiene el asterisco si se va a actualazar.*/
