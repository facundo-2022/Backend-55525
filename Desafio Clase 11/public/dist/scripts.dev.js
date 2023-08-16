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