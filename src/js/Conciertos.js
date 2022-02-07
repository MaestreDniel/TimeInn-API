/**
 * @author: Daniel Maestre Hermoso
 * Fecha inicio: 24/01/2022
 * Fecha fin: 07/02/2022
 * Asignatura: Entorno Cliente
 * @version: 1.0
 */

let apiConcert = 'http://localhost:3000/conciertos';

/**
 * imprimirConcierto() es para consultar el listado completo de los conciertos, así que por defecto hace el GET
 * y recupera los conciertos registrados en la fake-api. Luego los imprime como tarjetas en la página de eventos.
 */

function imprimirConcierto() {

  fetch(apiConcert)
    .then((response) => response.json())
    .then((conciertos) => {
      let txt = "";
      txt += "<br>";
      for (let i in conciertos) {
        txt += conciertos[i].div;
        txt += conciertos[i].link + conciertos[i].foto + "</a>";
        txt += '<div class="infoConcert">';
        txt += '<div id="edicion">';
        txt += `<button id="editConcert" onclick="saltarFormularioEdit(${conciertos[i].id})"><i class="fas fa-pencil-alt"></i></button>`;
        txt += `<button onclick="eliminarEvent(${conciertos[i].id})" class="delConcert"><i class="fas fa-trash-alt"></i></button>`;
        txt += '</div>';
        txt += "<h2>" + conciertos[i].titulo + "</h2>";
        txt += "<h3>" + conciertos[i].grupo + "</h3>";
        txt += "<h3>" + conciertos[i].fecha + "</h3>";
        txt += "<h3>" + conciertos[i].lugar + "</h3>";
        txt += '</div>';
        txt += '</div>';
      }
      document.getElementById("conciertos").innerHTML = txt;
    })
    .catch(function (error) {
      document.getElementById("fetcherror").innerHTML = "Ha habido algún problema para mostrar los conciertos";
    })
}

// Se ejecuta directamente al cargar la página
imprimirConcierto();

/**
 * Se parece a imprimirConcierto(), pero en este caso se busca imprimir solamente aquel
 * concierto que indique el usuario.
 */

function imprimirEsteConcierto(evento) {
  fetch(`http://localhost:3000/conciertos/${evento}`)
  .then(response => response.json())
  .then((evento) => {
    let txt = "";
    txt += "<br>";
    txt += evento.div;
    txt += evento.link + evento.foto + "</a>";
    txt += '<div class="infoConcert">';
    txt += '<div id="edicion">';
    txt += `<button id="editConcert" onclick="saltarFormularioEdit(${evento.id})"><i class="fas fa-pencil-alt"></i></button>`;
    txt += `<button onclick="eliminarEvent(${evento.id})" class="delConcert"><i class="fas fa-trash-alt"></i></button>`;
    txt += '</div>';
    txt += "<h2>" + evento.titulo + "</h2>";
    txt += "<h3>" + evento.grupo + "</h3>";
    txt += "<h3>" + evento.fecha + "</h3>";
    txt += "<h3>" + evento.lugar + "</h3>";
    txt += '</div>';
    txt += '</div>';
    document.getElementById("conciertos").innerHTML = txt;
  })
  .catch(function (error) {
    document.getElementById("fetcherror").innerHTML = "Ha habido algún problema para mostrar los conciertos";
  })
}


// Se encarga de mostrar el formualario para crear conciertos
function saltarFormulario() {
  document.getElementById("newConcierto").style.display = "block";
  document.getElementById("add").addEventListener("click", function () {
    confirmaAdd();
    closeForm();
  });
}

// Se encarga de mostrar el formualario para editar conciertos
function saltarFormularioEdit(evento) {
  document.getElementById("editConcierto").style.display = "block";
  document.getElementById("edit").addEventListener("click", function () {
    confirmaEdit(evento);
    closeForm();
  });
  return evento;
}

// Es una validación mínima que trata de evitar que los campos estén vacíos
function confirmaAdd() {
  if (document.getElementById("link").value === "" ||
    document.getElementById("titulo").value === "" || document.getElementById("grupo").value === "" ||
    document.getElementById("fecha").value === "" || document.getElementById("lugar").value === "") {
    cerrarForm = false;
    alert("Debes rellenar todos los campos del formulario");
  } else {
    cerrarForm = true;
    añadirConcierto();
  }
}

function confirmaEdit(evento) {
  if (document.getElementById("linkk").value === "" ||
    document.getElementById("tituloo").value === "" || document.getElementById("grupoo").value === "" ||
    document.getElementById("fechaa").value === "" || document.getElementById("lugarr").value === "") {
    cerrarForm = false;
    alert("Debes rellenar todos los campos del formulario");
  } else {
    cerrarForm = true;
    editEvent(evento);
  }
}

let cerrarForm = false;

/**
 * añadirConcierto() es un fetch que utiliza POST con tal de guardar un nuevo concierto en la fake-api.
 * No está programado para aceptar imágenes, así que introduce una por defecto, el resto de campos sí que
 * los recoge a partir de los input del formulario
 */

function añadirConcierto() {
  fetch('http://localhost:3000/conciertos', {
      method: 'POST',
      body: JSON.stringify({
        div: '<div class="concert">',
        link: '<a href="https://www.the-scorpions.com/">',
        foto: '<img class="imgEvent" src="images/concierto1.PNG" alt="No se pudo mostrar">',
        titulo: document.getElementById("titulo").value,
        grupo: document.getElementById("grupo").value,
        fecha: document.getElementById("fecha").value,
        lugar: document.getElementById("lugar").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(imprimirConcierto())
    .then((document.getElementById("fetchresult").innerHTML = "Concierto añadido con éxito. En caso de que no lo veas, refresca la página."));

}

function closeForm() { // Es para que se cierre automáticamente al añadir un concierto, no es lo mismo que cerrable()
  if (cerrarForm == true) {
    cerrable();
  }
}

function cerrable() { // Es para que se pueda cerrar directamente, se haya añadido un concierto antes o no
  document.getElementById("newConcierto").style.display = "none";
  document.getElementById("editConcierto").style.display = "none";
}

// Recoge el input del usuario para determinar qué concierto está buscando
function filtraConciertos() {
  let filtrado = parseInt(prompt(
    "¿Qué número de concierto quieres consultar?"));
    imprimirEsteConcierto(filtrado);
}

/**
 * Este fetch usa el método DELETE para eliminar un concierto de la fake-api. El parámetro evento
 * está determinado por el bóton de papelera que se imprime al lado de cada concierto, el cual recoge
 * la id de cada concierto.
 */

function eliminarEvent(evento) {
  fetch(`http://localhost:3000/conciertos/${evento}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.status == "200") {
        document.getElementById("fetchresult").innerHTML = `Concierto ${evento} eliminado correctamente`;
        imprimirConcierto();
      } else
        throw new Error(response.status)
      response.json()
    })
}

/**
 * Es muy similar a eliminarEvent. Este fetch usa el método PUT para modificar un concierto de la fake-api.
 * El parámetro evento está determinado por el bóton de editar que se imprime al lado de cada concierto,
 * el cual recoge la id de cada concierto. Se diferencia de eliminar en que en este caso sí que recoge valores
 * del formulario para gestionar los datos
 */

function editEvent(evento) {
  fetch(`http://localhost:3000/conciertos/${evento}`, {
      method: 'PUT',
      body: JSON.stringify({
        div: '<div class="concert">',
        link: '<a href="https://www.the-scorpions.com/">',
        foto: '<img class="imgEvent" src="images/concierto1.PNG" alt="No se pudo mostrar">',
        titulo: document.getElementById("tituloo").value,
        grupo: document.getElementById("grupoo").value,
        fecha: document.getElementById("fechaa").value,
        lugar: document.getElementById("lugarr").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(imprimirConcierto())
    .then((document.getElementById("fetchresult").innerHTML = `El concierto ${evento} ha sido editado correctamente. Si no se te muestran los cambios aún, refresca la página.`))
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

// Vuelve arriba al ser clicado
function backToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}

function menuNavRespons() {
  let burger = document.getElementById("hamburger");
  burger.classList.toggle("menuon");
}
