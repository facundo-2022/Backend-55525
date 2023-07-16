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
let newArray = [];

objetos.forEach((objets) => {
  const values = Object.keys(objets);
  values.forEach((value) => {
    if (!newArray.includes(value)) newArray.push(value);
  });
});
console.log(newArray);*/

const totalProductosVendidos = objetos.reduce((total, objeto) => {
  const cantidades = Object.values(objeto);
  const suma = cantidades.reduce((a, b) => a + b, 0);
  return total + suma;
}, 0);

console.log("total de productos vendidos", totalProductosVendidos);
