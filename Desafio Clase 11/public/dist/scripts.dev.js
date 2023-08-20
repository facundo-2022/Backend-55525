"use strict";

var socket = io();
var textarea = document.getElementById("complet-form");
var productForm = document.getElementById("formulario");
var productInput = document.getElementById("title");
var codeInput = document.getElementById("code");
var priceInput = document.getElementById("price");
var products = document.getElementById("");
socket.on("addText", function (text, descripcion) {
  textarea.value += text + descripcion + "\n";
  products.value += text + descripcion;
});
productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var producto = productInput.value.trim();
  var code = codeInput.value.trim();
  var price = priceInput.value.trim();

  if (producto) {
    textarea.value = "";
    socket.emit("addText", producto, code, price);
    productInput.value = "";
    codeInput.value = "";
    priceInput.value = "";
  }
});