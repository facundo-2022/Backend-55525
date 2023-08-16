const socket = io();
const textarea = document.getElementById("complet-form");
const productForm = document.getElementById("formulario");
const productInput = document.getElementById("title");
const codeInput = document.getElementById("code");
const priceInput = document.getElementById("price");
const products = document.getElementById("");

socket.on("addText", (text, descripcion) => {
  textarea.value += text + descripcion + "\n";
  products.value += text + descripcion;
});
