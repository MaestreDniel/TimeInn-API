/**
 * Cogemos el valor de los campos del formulario para poder introducirlos en sus validaciones
 * cogiendo sus respectivas variables 
 * */


import {
  validarEmail, validarName, validarPassword, validarConfPassword,
  mostrarPassword, mostrarPasswordConf, paginaLogin, SignUpValido, ocultarPassword
} from "./validaciones.mjs"

document.getElementById("email").addEventListener("blur", function () {
  validarEmail();
})

document.getElementById("user").addEventListener("blur", function () {
  validarName();
})

document.getElementById("password").addEventListener("blur", function () {
  validarPassword();
})

document.getElementById("confirmP").addEventListener("blur", function () {
  validarConfPassword();
})

document.getElementById("verPassword").addEventListener("mousedown", function () {
  mostrarPassword();
})

document.getElementById("verPassword").addEventListener("mouseup", function () {
  mostrarPassword();
})

document.getElementById("verPassword2").addEventListener("mousedown", function () {
  mostrarPasswordConf();
})

document.getElementById("verPassword2").addEventListener("mouseup", function () {
  mostrarPasswordConf();
})

document.getElementById("loginButton").addEventListener("click", function () {
  paginaLogin();
})

document.getElementById("signUpButton").addEventListener("click", function () {
  SignUpValido();
})

document.getElementsByTagName("body")[0].addEventListener("mousemove", function () {
  ocultarPassword();
})