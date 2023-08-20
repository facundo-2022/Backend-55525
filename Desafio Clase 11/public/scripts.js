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

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const producto = productInput.value.trim();
  const code = codeInput.value.trim();
  const price = priceInput.value.trim();

  if (producto) {
    textarea.value = "";
    socket.emit("addText", producto, code, price);
    productInput.value = "";
    codeInput.value = "";
    priceInput.value = "";
  }
});
