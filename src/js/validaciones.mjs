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
}

export function loginApi() {
  let url = 'http://localhost:3001/auth/login';
  let headers = new Headers();
  let email = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  headers.set('Authorization', 'Basic ' + btoa(email + ":" + password))

  fetch(url, {
      method: 'GET',
      headers: headers,
    })
    .then(function (response) {
      console.log('Response.status =', response.status)
      if (response.status == 200) {
        window.location.href = "./"
      } else {
        document.getElementById("errorLogin").innerHTML = "Estas credenciales son incorrectas";
      }
      return response.json()
    })
    .catch(function (error) {
      console.error('Error en el fetch: ', error.message)
    })
}