/**
 * @author: Daniel Maestre Hermoso
 * Fecha inicio: 24/01/2022
 * Fecha fin: 
 * Asignatura: Entorno Cliente
 * @version: 1.0
 */

let apiConcert = 'http://localhost:3000/conciertos';

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

// Se imprime directamente al cargar la página
imprimirConcierto();


//TODO: Saltar Formulario Nuevo Concierto 
function saltarFormulario() {
  document.getElementById("newConcierto").style.display = "block";
  document.getElementById("add").addEventListener("click", function () {
    confirmaAdd();
    closeForm();
  });
}

function saltarFormularioEdit(evento) {
  document.getElementById("editConcierto").style.display = "block";
  document.getElementById("edit").addEventListener("click", function () {
    confirmaEdit(evento);
    closeForm();
  });
  return evento;
}

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

// TODO:Cerrar formulario
function closeForm() { // Es para que se cierre automáticamente al añadir un concierto, no es lo mismo que cerrable()
  if (cerrarForm == true) {
    cerrable();
  }
}

function cerrable() { // Es para que se pueda cerrar directamente, se haya añadido un concierto antes o no
  document.getElementById("newConcierto").style.display = "none";
  document.getElementById("editConcierto").style.display = "none";
}

/* function filtraConciertos() {
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

} */

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

// TODO:Go to TOP
// Vuelve arriba al ser clicado
function backToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}

// TODO:Formulario Busqueda
// Cuando pulsamos el boton de Grupos o estilos salta el formulario


function menuNavRespons() {
  let burger = document.getElementById("hamburger");
  burger.classList.toggle("menuon");
}

/* ======== ESQUEMA DE FETCH ======== */

/*     var myAPIurl =[]
    //URL de la Api de Concerts 
    myAPIurl.push('  http://localhost:3000/concerts')
    //URL de la APi de Events
     myAPIurl.push(' http://localhost:3000/events')
    
     //COger los conciertos o los eventos
     const cas = 0

     fetch(myAPIurl[cas])
     .then(function (response) {
       console.log('Response.status =', response.status)
       console.log('Response.type =', response.type)
       console.log('Response.ok =', response.ok)
       //return response.text()
       return response.json()
       //return response.blob()
     })

     .then(function (data) {
       console.log('Les dades retornades:', data)
     })

     .then(response => response.blob())

     .then(response => response.json())

     .catch(function (error) {
       console.error('Error en el fetch: ', error.message)
     }) */


// Fetch to GET one concert
/* fetch('http://localhost:3000/conciertos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */

//Fetch to PUT a concert
/* fetch('http://localhost:3000/conciertos/1', {
    method: 'PUT',
    body: JSON.stringify({
      titulo: 'Concierto',
      grupo: 'grupo',
      fecha: 'yyyy-mm-dd',
      lugar: 'lugar'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json)) */

//Fetch to PATCH a concert
/* fetch('http://localhost:3000/conciertos/1', {
    method: 'PATCH',
    body: JSON.stringify({
      titulo: 'Concierto',
      grupo: 'grupo',
      fecha: 'yyyy-mm-dd',
      lugar: 'lugar'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json)) */