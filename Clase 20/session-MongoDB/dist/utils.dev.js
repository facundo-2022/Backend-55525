"use strict";

var bcrypt = require("bcrypt");

var createHash = function createHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}; // toma el password y aplica el proceso de hasheo , el gensalt]Sinc te crea 10 caracteres distinto a la clave


var isValidatePassword = function isValidatePassword(user, password) {
  return bcrypt.compareSync(password, user.password);
}; // esta user y password y los compara, internamente decifra para comparar y si coinciden las vuelve a cifrar.


module.exports = {
  createHash: createHash,
  isValidatePassword: isValidatePassword
}; //luego lo llamas en el archivo js donde estes utilizando el post y el codigo de utils.js.