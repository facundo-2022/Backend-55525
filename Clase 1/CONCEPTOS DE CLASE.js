//VARIABLES
/*

  *datos dentro de variales son number - string- boolean
  *tambien existen array - objetos

  let = nos permite inicializar variables sin asignar un valor, tambien permite reasignar el valor de la variable

  const = no permite inicializar variable sin valor y no permite reasignar valor.
 */

//FUNCIONES
/*
 -Aspecto a tener en cuenta es la declaracion de la funcion
  function myFunction(param, param1){
    /cuerpo de la funcion
    /acciones de la funcion, variables y demas valores
    /return resultado de la funcion
  }
  llamamos a la funcion --> myFunction(valor,valor1) PASANDO ESTOS DOS PARAMETROS VA A LEER LA LOGICA Y NOS DEVUELVE LO QUE NOSOTROS ESTAMOS LOGRANDO EJECUTAR.


  EJ: 
  function increment(a,b){
    return a + b;
  }

  let result = increment(2,3)
  console.log(result) --> ejecuto la funcion para obtener resultado

  */

//FUNCIONES ANONIMAS

/*
let greet = function(name){
  console.log("Hi" + name)
}

greet ("facundo")

/setTimeout(function(){
  console.log("5seconds")
}, 5000)


let numbres =[1,2,3,4,5]
number.forEach(function(number){
  console.log(number*2)
}

*/

//SCOPE (ambito de una variable)
/*
//variable global

let student = "coder"

function greet(){
  console.log("hi" + "" + student)
}
greet()
console.log(student) ----> es decir al ser global puedo ejecutar de ambas maneras la funcion

//variable local

function increment(){
  let result = a+ b
  console.log(result)
}

increment(3,4) --> de esta manera puede llamar a result y ejecutar.
console.log(result) --> de esta manera no lo puedo hacer porque no esta definido por fuera de la funcion.

En las variables locales pueden ocultar o tener alguna prioridad la variable dentro de la funcion (local) por encima de una variable global.
*/

//CLOUSURE

//TEMPLATE STRING

//CLASES

//EJERCICIO DE CLASE
(function mostrarLista(lista) {
  if (lista.length > 0) {
    lista.forEach((e) => {
      console.log(e);
    });
  } else {
    console.log("Lista Vacia");
  }
})([]);

function crearMultiplicador(numero) {
  return function (segundo_numero) {
    return numero * segundo_numero;
  };
}
