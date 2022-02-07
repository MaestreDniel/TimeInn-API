/**
 * @author: Daniel Maestre Hermoso
 * Fecha inicio: 24/01/2022
 * Fecha fin: 07/02/2022
 * Asignatura: Entorno Cliente
 * @version: 1.0
 */


let apiNews = 'http://localhost:3000/noticias';
let apiEvents = 'http://localhost:3000/eventos';

// Se recorre la estructura de datos para imprimir las noticias en la página de inicio

function imprimirNews() {
  fetch(apiNews)
    .then((response) => response.json())
    .then((noticia) => {
      let txt = "";
      for (let i in noticia) {
        txt += '<div class="noticia">';
        txt += noticia[i].foto;
        txt += '<div class="info">';
        txt += "<h4>" + noticia[i].titular + "</h4>";
        txt += "<p>" + noticia[i].descripcion + "</p>";
        txt += noticia[i].info + "<br>";
        txt +=
          "Fecha de publicación: " +
          noticia[i].fecha.substr(8, 8) +
          noticia[i].fecha.substr(4, 4) +
          noticia[i].fecha.substr(0, 4) +
          "<br>";
        txt += "</div></div>";
      }
      document.getElementById("news").innerHTML = txt;
    })
    .catch(function (error) {
      console.log('Error en el Fetch:', error)
    })

}

// Ejecutamos la función para que salte directamente
imprimirNews();

// TODO:Imprimir Eventos. DONE
// Funciona de manera similar a imprimirNews
function imprimirEventos() {
  fetch(apiEvents)
    .then((response) => response.json())
    .then((evento) => {
      let txt = "";
      txt += '<div class="degradadoizq"></div>';
      for (let i in evento) {
        txt += '<div class="event">';
        txt += evento[i].foto;
        txt += "<p><span>" + evento[i].nombre + "</span></p>";
        txt += "<div class='fechaevent'>Fecha de celebración: <br>";
        txt +=
          evento[i].fechaI.substr(8, 8) +
          evento[i].fechaI.substr(4, 4) +
          evento[i].fechaI.substr(0, 4) + "<br>";
        txt +=
          evento[i].fechaF.substr(8, 8) +
          evento[i].fechaF.substr(4, 4) +
          evento[i].fechaF.substr(0, 4) + "<br></div>";
        txt += '<i class="fas fa-info-circle"></i>' + evento[i].patronicio + "</div>";
        txt += '<div class="overlayevent" onclick="off()">'; // Por defecto está oculto
        txt += "<span>" + evento[i].descripcion + "<br>" + evento[i].info + "</span>" + "</div>";
      }
      txt += '<div class="degradadoder"></div>';
      document.getElementById("eventos").innerHTML = txt;
    })
    .catch(function (error) {
      console.log('Error en el Fetch:', error)
    })

}

// Se imprimen automaticamente los eventos
imprimirEventos();

/* Es el botón de go back to top, que saldrá en el momento
que el usuario hace scroll 100px hacia abajo desde el tope de la página */

buttop = document.getElementById("top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    buttop.style.display = "block";
  } else {
    buttop.style.display = "none";
  }
}

//TODO:Button Back to Top
// Vuelve arriba al ser clicado
function backToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}

//TODO:Formulario de Busqueda
//Muestra el formulario de busqueda de eventos
function mostrarFormulario() {
  var formulario = document.getElementById("formulario");
  formulario.style.display = block;
  var evento = document.getElementById("eventos");
  evento.style.display = block;
}

//TODO:Informacion de los Eventos con efecto Overlay
/* Estas líneas son las que hacen funcionar el efecto de overlay de la info de cada efecto */
/* for (let i = 0; i <= Events.eventos.length - 1; i++) {
  document
    .getElementsByClassName("fas fa-info-circle")[i].addEventListener("click", function () {
      on(i);
    });
}

// Función para que apareza que overlay
function on(numevent) {
  let info = document.getElementsByClassName("overlayevent")[numevent];
  info.style.display = "block";
}

// Función para que desaparezca el overlay
function off() {
  for (let i = 0; i < Events.eventos.length; i++) {
    let info = document.getElementsByClassName("overlayevent")[i];
    info.style.display = "none";
  }
} */

// TODO:LOGIN/Suscripcion
function login() {
  document.getElementById("suscripcion").style.display = "none";
}

/**
 * Las cookies en el navegador Chrome no se guardan si se abre el archivo directamente desde un explorador
 * de archivos, tiene que ser un localhost (con la extensión de Live Server de Visual Studio ya sirve.)
 * https://stackoverflow.com/questions/15385641/javascript-code-for-cookie-not-working-in-chrome
 */

// TODO:COOKIE Suscripción

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("timeinn");
  if (user != "") {
    //
  } else {
    setCookie("timeinn", "user", 7); // El 7 hará que tenga una duración de una semana
    setTimeout(function muestraFormSub() {
      let formlogin = document.getElementById("suscripcion");
      formlogin.style.display = "block";
    }, 3000);
  }
}

checkCookie();

function checkCookieUser() {
  let usuariologueado = getCookie("user");
  document.getElementById("logueado").innerHTML = usuariologueado.toLocaleUpperCase()
}

checkCookieUser();

document.getElementById("diauno").addEventListener("click", function () {
  location.href = 'Conciertos.html'; // Añade el enlace clicable a todo el contenedor
});

function menuNavRespons() {
  let burger = document.getElementById("hamburger");
  burger.classList.toggle("menuon");
}