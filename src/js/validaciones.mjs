// Fichero de módulos: "1. Els fitxers de mòduls haurien de tenir l'extensió .mjs"

//TODO: Validar Email
export function validarEmail() {
  let email = document.getElementById("email").value;
//Si el email esta vacio salta el error y retorna falso
  if (email.length == 0) {
    document.getElementById("errorEmail").innerHTML = "*Campo obligatorio";
    toggleInputFalse("email");
    return false;
//Si no sigue el siguiente patron el email es incorrecto
  } else if (!/^[A-Za-z]{1}[a-z]{0,20}@[a-z]{5,10}.(net|com|gov)/.test(email)) {
    document.getElementById("errorEmail").innerHTML = `El email debe seguir este formato:
    aaaaaaaaaa@bbbbbbbb.ccc <br> Teniendo en cuenta que: <br>
    - aaaaaaaaa está en minúsculas, salvo la primera letra que opcionalmente puede ser mayúscula <br>
    - bbbbbbbb tiene entre 5 y 10 letras minúsculas <br>
    - ccc solo puede valer: com, net o gov <br>
    - Que solo hay 1 arroba y 1 punto (y la arroba va antes que el punto)`;
    toggleInputFalse("email");
    return false;
    //Si email coincide con alguno del array de emails registrados tambien da error
  } else if (!existeEmail()) {
    document.getElementById("errorEmail").innerHTML="Este email ya está registrado";
    toggleInputFalse("email");
    return false;
    //Si todo lo anterior se ha realizado correctamente retorna true y el email esta validado
    //Guarda el email dentro del array para que no se repita el email con otros registros
  } else {
    document.getElementById("errorEmail").innerHTML = "";
    toggleInputTrue("email");
    
    return true;
  }
}

//TODO:Input validacion
//Campo invalido false
function toggleInputFalse(myinput) {
  let input = document.getElementById(myinput);
  input.classList.toggle("novalido", true);
  input.classList.toggle("valido", false);
}
//Campo valido true
function toggleInputTrue(myinput) {
  let input = document.getElementById(myinput);
  input.classList.toggle("valido", true);
  input.classList.toggle("novalido", false);
}

//TODO: Validar Name
export function validarName() {
  let user = document.getElementById("user").value;
//Si está vacio salta el error y retorna falso
  if (user.length == 0) {
    document.getElementById("errorName").innerHTML = "*Campo obligatorio";
    toggleInputFalse("user");
    return false;
  }

  //Si no cumple el patrón de usuario salta el error y retorna falso 
  else if (!/^\w{1,20}$/.test(user)) {

    document.getElementById("errorName").innerHTML =
      "El nombre debe estar compuesto de carácteres alfanuméricos y tener un máximo de 20 caracteres";
    toggleInputFalse("user");
    return false;
  }
  //Si ya existe el usuario salta el error y retorna falso
   else if (!existeUser()) {  
    document.getElementById("errorName").innerHTML =
      "Este nombre de usuario ya existe";
    toggleInputFalse("user");
    return false;
  } 
  //Si cumple todos los requisitos entonces se da como valido y da true
  else {
    document.getElementById("errorName").innerHTML = "";
    toggleInputTrue("user");
    return true;
  }
}

//TODO: Validar Nombre Login
export function validarNameLogin() {
//Si el nombre del usuario no existe salta el error y retorna falso
  if (existeUser()) {
    document.getElementById("errorName").innerHTML =
      "Este nombre de usuario no está registrado";
    toggleInputFalse("user");
    return false;
  }
  //En caso contrario retorna true  
  else {
    document.getElementById("errorName").innerHTML = "";
    toggleInputTrue("user");
    return true;
  }
}

//TODO: Validar Password
export function validarPassword() {
  let password = document.getElementById("password").value;
//Si está vacio salta el error y retorna falso
  if (password.length == 0) {
   document.getElementById("errorPassword").innerHTML = "*Campo obligatorio";
    toggleInputFalse("password");
    return false;
  } 
  //Si no cumple el patrón salta el error y retorna falso
  else if (!/^.{7,}\W{1}.{0,}/.test(password)) {
    document.getElementById("errorPassword").innerHTML =
      `La contraseña debe tener un mínimo de 8 caracteres <br>
      Primero hay que poner (como mínimo) 7 caracteres cualquiera. <br>
      Luego hay que poner un caracter especial distinto al guión bajo <br>
      A partir de aquí se puede añadir cualquier caracter.`
    toggleInputFalse("password");
    return false;
  }
  //Si cumple todos los requisitos entonces se da como válido y da true
   else {
    document.getElementById("errorPassword").innerHTML = "";

    toggleInputTrue("password");

    return true;
  }
}

//TODO: Validar Confirmación Contraseña
export function validarConfPassword() {
  let confirmP = document.getElementById("confirmP").value;
  let password = document.getElementById("password").value;
  //Si la confirmacion esta vacia da error
  if (confirmP.length == 0) {
    document.getElementById("errorConfirm").innerHTML = "*Campo obligatorio";
    toggleInputFalse("confirmP");
    return false;
    
  }
 //Si no coinciden ambas contraseñas da error 
  else if (password !== confirmP) {
    document.getElementById("errorPassword").innerHTML =
      "Las contraseñas no coinciden";
    toggleInputFalse("confirmP");
    return false;
    
  }
  //Si se cumplen las condiciones anteriores la confirmacion de la contraseña es correcta
   else {
    document.getElementById("errorPassword").innerHTML = "";
    toggleInputTrue("confirmP");
    return true;
  }
}

//TODO: Login Validado Correctamente
export function loginValido() {
  //Si el nombre y la contraseña del login se han validado el usuario se puede loguear
  if (validarNameLogin() && validarPassword()) {
    //Se loguea y nos llevara a la pagina de inicio de la web
    
    window.location.href = "./";
  } else {
    document.getElementById("errorLogin").innerHTML =
      "Credenciales incorrectas";
      //Si no se valida correctamente el user Login se marca en rojo
    if (!validarNameLogin()) {
      document.getElementById("user").focus();

    }
    //Si no se valida correctamente la contraseña Login se marca en rojo
     else if (!validarPassword()) {
      document.getElementById("password").focus();
    }
  }
}

//TODO: Validacion SignUP
export function SignUpValido() {
  //Si los campos del SignUp estan validados correctamente te llevan al login
  if (validarEmail() && validarName() && validarPassword() && validarConfPassword()) {
    // alert("Te has suscrito a Music4Events");
    window.location.href = "./Login.html";
    
  }
  //Si uno de los anteriores falla nos avisa de que es incorrecto
  else {
    document.getElementById("errorSignUp").innerHTML = "Credenciales incorrectas";
      // El primer erróneo se pondra rojo
    if (!validarEmail()) { 
      document.getElementById("email").focus();
    } else if (!validarName()) {
      document.getElementById("user").focus();
    } else if (!validarPassword()) {
      document.getElementById("password").focus();
    } else if (!validarConfPassword()) {
      document.getElementById("confirmP").focus();
    }
  }
}


export function paginaSignUp() {
  window.location.href = "./SignUp.html";
}

export function paginaLogin() {
  window.location.href = "./Login.html";
}

//TODO:Mostrar Contraseña
// Se muestra la contraseña solamente mientras se mantenga el ojo pulsado
export function mostrarPassword() {
  let tipo = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  } else {
    tipo.type = "text";
  }
}
//TODO:Mostrar Confirmacion Contraseña
export function mostrarPasswordConf() {
  let tipo = document.getElementById("confirmP");
  if (tipo.type == "text") {
    tipo.type = "password";
  } else {
    tipo.type = "text";
  }
}

/* Evita un problema que hace que al arrastrar el ratón mientras 
se mantiene pulsado el ojo, la contraseña se mantiente visible */
export function ocultarPassword() {
  let tipo = document.getElementById("confirmP");
  let tipo2 = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  } else if (tipo2.type == "text") {
    tipo2.type = "password";
  }
}


export function ocultarPasswordLogin() {
  let tipo = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  }
}

//Array donde se almacenan todos los emails de los usuarios registrados
let emails = ["dmaestre@cifpfbmoll.com", "jmateo@cifpfbmoll.com","classicoman@gmail.net"];

//Recorre el array de email para ver si el email que introducimos ya existe, para que no se repita
function existeEmail() {
  let correo = document.getElementById("email").value;
  for (let i = 0; i < emails.length; i++) {
    if (correo === emails[i]) {
      return false;
    }
  }
  document.getElementById("errorEmail").innerHTML = "";
  toggleInputTrue("email");
  return true;
}

//Array donde se almacenan todos los nombres de usuario registrados
let users = ["Maestre", "JMateo", "Classicoman"];

//Recorre el array de usuarios para ver si el usuario que introducimos ya existe, para que no se repita
function existeUser() {
  let usuario = document.getElementById("user").value;
  for (let i = 0; i < users.length; i++) {
    if (usuario === users[i]) {
      return false;
    }
  }
  document.getElementById("errorName").innerHTML = "";
  toggleInputTrue("user");
  return true;
}