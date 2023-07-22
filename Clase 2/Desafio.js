const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

/*
Hecho por el profe omar
//OBTENES LISTA DE PRODUCTOS

const tiposProductos = objetos.reduce(lista, objeto) =>{
    Object.keys(objeto).forEach(producto=>{
        if(!lista.includes(producto)){
            lista.push(producto);
        }
    })
    return lista
}esos dos parametros

console.log("Tipos de producto:", tiposProductos) 
 */

let newArray = [];

objetos.forEach((objetos) => {
  const values = Object.keys(objetos);
  values.forEach((value) => {
    if (!newArray.includes(value)) newArray.push(value);
  });
});
console.log(newArray);

const totalProductosVendidos = objetos.reduce((total, objeto) => {
  const cantidades = Object.values(objeto);
  const suma = cantidades.reduce((a, b) => a + b, 0); // el 0 es su valor inicial para la suma
  return total + suma;
}, 0);

console.log("total de productos vendidos", totalProductosVendidos);
