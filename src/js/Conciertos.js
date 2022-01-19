/**
 * @author: Jeroni Mateo Curieses, Daniel Maestre Hermoso
 * Fecha inicio: 3/11/2021
 * Fecha fin: 28/11/2021
 * Asignatura: Entorno Cliente y Diseño de Interfaces
 * @version: 1.0
 */

// TODO:Objeto Conciertos.DONE
// Creamos los objetos para los conciertos
const Concert = {
  conciertos: [{
      /**
       * Cada objeto tendrá:
       * Un div donde irá metido un id para poder manipularlo 
       * El link que dirige al usuario a la página oficial del grupo
       * Una imagen del poster del concierto
       * Título del concierto
       * El nombre del grupo o cantante
       * Las fechas de los eventos 
       * Lugar del concierto
       */
      div: '<div class="concert" id="concierto1">',
      link: ' <a href="https://www.the-scorpions.com/">',
      foto: '<img class="imgEvent" src="images/concierto1.PNG" alt="No se pudo mostrar">',
      titulo: "Concierto Scorpions",
      grupo: "Scorpions",
      fecha: "2022-06-24",
      lugar: "",
    },
    {
      div: '<div class="concert" id="concierto2">',
      link: '<a href="https://stageverse.muse.mu/?ref=https://www.google.com/">',
      foto: '<img class="imgEvent" src="images/concierto2.PNG" alt="No se pudo mostrar">',
      titulo: "Muse Live Festival",
      grupo: "Muse",
      fecha: "2022-06-25",
      lugar: "",
    },
    {
      div: '<div class="concert" id="concierto3">',
      link: ' <a href="https://filmsymphony.es/">',
      foto: '<img class="imgEvent" src="images/concierto3.PNG" alt="No se pudo mostrar">',
      titulo: "FSO Fénix La Gira",
      grupo: "Fenix",
      fecha: "2022-05-30",
      lugar: "",
    },
    {
      div: '<div class="concert" id="concierto4">',
      link: '<a href="https://ctangana.com/">',
      foto: '<img class="imgEvent" src="images/concierto4.PNG" alt="No se pudo mostrar">',
      titulo: "Rio Babel, C. Tangana",
      grupo: "C.Tangana",
      fecha: "2022-07-01",
      lugar: "Madrid",
    },
    {
      div: '<div class="concert" id="concierto5">',
      link: '<a href="https://www.justinbiebermusic.com/">',
      foto: '<img class="imgEvent" src="images/concierto5.PNG" alt="No se pudo mostrar">',
      titulo: "Justice World Tour, Justin Bieber",
      grupo: "Justin Bieber",
      fecha: "2022-10-10",
      lugar: "Estadio Unico de la Plata",
    },
    {
      div: '<div class="concert" id="concierto6">',
      link: '<a href="https://www.pinkfloyd.com/home.php">',
      foto: '<img class="imgEvent" src="images/concierto6.PNG" alt="No se pudo mostrar">',
      titulo: "Nicks Masons Saugerful of Secrets, Pink Floyd",
      grupo: "Pink Floyd",
      fecha: "2022-07-09",
      lugar: "Barcelona",
    },
  ]
}

//TODO:Imprimir Concierto.DONE
function imprimirConcierto(conciertos) {
  let txt = "";
  txt += "<br>"
  txt += '<div id="contfunc"><div class="funciones">Añadir nuevo concierto<button onclick="saltarFormulario()" type="button" id="addConcert"><i class="far fa-plus-square"></i></button></div>';
  txt += '<div class="funciones">Filtros de búsqueda<button onclick="filtraConciertos()" type="button" id="filterConcert"><i class="fas fa-filter"></i></button></div>';
  txt += '<div class="funciones">Resetea los filtros<button onclick="imprimirConcierto(Concert.conciertos)" type="button" id="filterConcert"><i class="fas fa-undo-alt"></i></button></div></div>';
  // Creamos un bucle Para recorrer los objetos de los Conciertos y a continuación imprimimos cada uno de ellos
  for (let i in conciertos) {
    txt += conciertos[i].div;
    txt += conciertos[i].link + conciertos[i].foto + "</a>";
    txt += '<div class="infoConcert">';
    txt += '<div id="edicion">';
    txt += `<button id="editConcert" onclick="editEvent(${i})"><i class="fas fa-pencil-alt"></i></button>`;
    txt += `<button onclick="eliminarEvent(${i})" class="delConcert"><i class="fas fa-trash-alt"></i></button>`
    txt += '</div>'
    txt += "<h2>" + conciertos[i].titulo + "</h2>";
    txt += "<h3>" + conciertos[i].grupo + "</h3>";
    txt += "<h3>" + conciertos[i].fecha + "</h3>";
    txt += "<h3>" + conciertos[i].lugar + "</h3>";
    txt += '</div>';
    txt += '</div>'
  }
  document.getElementById("conciertos").innerHTML = txt;
}

// Se imprime directamente al cargar la página
imprimirConcierto(Concert.conciertos);


//TODO:EventoDestacado.DONE
const EventDes = {
  destacado: [{
    foto: '<img class="imgEvent" src="images/event1.PNG" alt="No se pudo mostrar">',
    nombre: 'Mallorca Live Festival',
    descripcion: 'Venid al gran festival de la musica en Mallorca'
  }]
}
//Una vez Creado el objeto destacado creamos una funcion con un for para imprimirlo directamente al ejecutar
function eventoDestacado() {
  let txt = "";
  txt += '<div class="degradadoizq"></div>';
  for (let i in EventDes.destacado) {

    txt += '<div class="event">';
    txt += EventDes.destacado[i].foto;
    txt += '<p><span>' + EventDes.destacado[i].nombre + '</span></p>';
    txt += '<i class="fas fa-info-circle"></i>' + '</div>';
  }
  txt += '<div class="degradadoder"></div>';
  document.getElementById("eventDes").innerHTML = txt;
}
//Impimimos el evento destacado a la izquierda de la pantalla
eventoDestacado();



//TODO: Saltar Formulario Nuevo Concierto 
function saltarFormulario() {
  document.getElementById("newConcierto").style.display = "block";
}

// TODO:Añadir nuevo Concierto
// Cogemos los todos valores del formulario 
// Creamos un objeto con cada uno de los valores del formulario
// Finalmente lo imprimimos debajo del último evento

let cerrarForm = false;

function añadirConcierto() {
  let randomid = Math.round(Math.random() * 1000000, 1);
  const conciertoNuevo = [{
    div: `<div class="concert" id="${randomid}">`,
    url: document.getElementById("link").value,
    poster: '<img src="/src/images/concierto1.png" >',
    titulo: document.getElementById("titulo").value,
    grupo: document.getElementById("grupo").value,
    fecha: document.getElementById("fecha").value,
    lugar: document.getElementById("lugar").value
  }];

  let txt = "";
  txt += "<br>"
  //Para imprimir hacemos lo mismo que con las noticias recorremos el objeto y se va imprimiendo
  for (let i in conciertoNuevo) {
    txt += conciertoNuevo[i].div;
    txt += conciertoNuevo[i].poster;
    txt += '<div class="infoConcert">';
    txt += "<h2>" + conciertoNuevo[i].titulo + "</h2>";
    txt += "<h3>" + conciertoNuevo[i].grupo + "</h3>";
    txt += "<h3>" + conciertoNuevo[i].fecha + "</h3>";
    txt += "<h3>" + conciertoNuevo[i].lugar + "</h3>";
    txt += '</div>';
    txt += '<div id="edicion">';
    txt += '<button id="editConcert" onclick="editEvent()"><i class="fas fa-pencil-alt"></i></button>';
    txt += '<button onclick="eliminarEvent()" class="delConcert"><i class="fas fa-trash-alt"></i></button>'
    txt += '</div>'
    txt += '</div>'
    if (conciertoNuevo[i].url === "" || conciertoNuevo[i].titulo === "" ||
      conciertoNuevo[i].grupo === "" || conciertoNuevo[i].fecha === "" ||
      conciertoNuevo[i].lugar === "") {
      cerrarForm = false;
      alert("Debes rellenar todos los campos del formulario");
    } else {
      document.getElementById("conciertos").innerHTML += txt;
      cerrarForm = true;
      return cerrarForm;
    }
  }
}

// TODO:Cerrar formulario
function closeForm() { // Es para que se cierre automáticamente al añadir un concierto, no es lo mismo que cerrable()
  if (cerrarForm == true) {
    document.getElementById("newConcierto").style.display = "none";
  }
}

document.getElementById("closeForm").addEventListener("click", function () {
  cerrable();
});

function cerrable() { // Es para que se pueda cerrar directamente, se haya añadido un concierto antes o no
  document.getElementById("newConcierto").style.display = "none";
}

// TODO:Busqueda Formulario 
// Cuando pulsamos el boton de Grupos o estilos salta el formulario
function mostrarFormulario() {
  document.getElementById("formularioBusqueda").style.display = block;
  document.getElementById("secciones").style.display = block;
}

function filtraConciertos() {
  let filtrado = parseInt(prompt(
    `Hemos hecho estos filtros: 
    1. Los conciertos que se celebran en Madrid
    2. Los conciertos posteriores al 1 de julio de 2022
    3. Busca un cantante en concreto`));
  switch (filtrado) {
    case 1:
      let concierto = Concert.conciertos.filter(concierto => concierto.lugar === "Madrid");
      imprimirConcierto(concierto);
      break;
    case 2:
      let concierto2 = Concert.conciertos.filter(concierto => concierto.fecha > "2022-07-01");
      imprimirConcierto(concierto2);
      break;
    case 3:
      let cantante = prompt("Escribe el nombre del grupo o cantante")
      let concierto3 = Concert.conciertos.filter(concierto => concierto.grupo === cantante);
      imprimirConcierto(concierto3);
      break;
    default:
      alert("Has elegido una opción no valida, no ocurrirá nada");
  }

}

// TODO: Eliminar Eventos.DONE
// Funcion para eliminar Eventos
function eliminarEvent(evento) {
  Concert.conciertos.splice(evento, 1);
  imprimirConcierto(Concert.conciertos);
}

/* Es el botón de go back to top, que saldrá en el momento
que el usuario hace scroll 100px hacia abajo desde el tope de la página */

buttop = document.getElementById("top");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    buttop.style.display = "block";
  } else {
    buttop.style.display = "none";
  }
}

// TODO:Go to TOP
// Vuelve arriba al ser clicado
function backToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}

// TODO:Formulario Busqueda
// Cuando pulsamos el boton de Grupos o estilos salta el formulario
function mostrarFormulario() {
  var formulario = document.getElementById("formularioBusqueda");
  formulario.style.display = block;
  var evento = document.getElementById("secciones");
  evento.style.display = block;
}

function menuNavRespons() {
  let burger = document.getElementById("hamburger");
  burger.classList.toggle("menuon");
}