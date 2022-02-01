// Fichero de módulos: "1. Els fitxers de mòduls haurien de tenir l'extensió .mjs"


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


//TODO: Validar Nombre Login
export function validarNameLogin() {


  //Si el nombre del usuario no existe salta el error y retorna falso
  /* if (existeUser()) {
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
  } */
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

/* Evita un problema que hace que al arrastrar el ratón mientras 
se mantiene pulsado el ojo, la contraseña se mantiente visible */
export function ocultarPassword() {
  let tipo = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  }
}

export function ocultarPasswordLogin() {
  let tipo = document.getElementById("password");
  if (tipo.type == "text") {
    tipo.type = "password";
  }
}

export function signUpApi() {
  fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((document.getElementById("fetchregisterok").innerHTML = "Te has registrado correctamente."))
    //.then(SignUpValido());
}

export function loginApi() { // Mirarlo
  fetch('http://localhost:3001/auth/login')
    .then((response) => response.json())
    .then((conciertos) => {
      
      //document.getElementById("conciertos").innerHTML = txt;
    })
    .catch(function (error) {
      console.log(error);
    })
}