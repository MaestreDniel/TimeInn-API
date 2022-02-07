/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */


import {
  mostrarPassword, paginaLogin, ocultarPassword, signUpApi
} from "./validaciones.mjs"


document.getElementById("verPassword").addEventListener("mousedown", function () {
  mostrarPassword();
})

document.getElementById("verPassword").addEventListener("mouseup", function () {
  mostrarPassword();
})

document.getElementById("loginButton").addEventListener("click", function () {
  paginaLogin();
})

document.getElementById("signUpButton").addEventListener("click", function () {
  signUpApi();
})

document.getElementsByTagName("body")[0].addEventListener("mousemove", function () {
  ocultarPassword();
})