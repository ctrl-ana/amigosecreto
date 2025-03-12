let Amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value; // agarramos el valor del campo de entrada con el id 'amigo'

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre"); // si el campo esta vacio mandara un mensaje
  } else {
    Amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = ""; // Dejamos limpio el campo de entrada
    mostrarListaAmigo();
  }
}


function mostrarListaAmigo() {
    let listaDeAmigos = document.querySelector('#listaAmigos');
    listaDeAmigos.innerHTML = ''; // Se obtiene el elemento y se guarda en la variable despues se limpia
 
    for (let conteo = 0; conteo < Amigos.length; conteo++) { // Se crea un blucle que recorre el arreglo
     const element = Amigos[conteo];
 
     let lista = document.createElement('li'); //Se crea un elemento 
     lista.textContent = element;
     listaDeAmigos.appendChild(lista);
  }
}


function sortearAmigo() {
    let cantidadAmigos = Amigos.length; // Se obtiene la cantidad de nombres dentro del Array Amigo
    if (cantidadAmigos === 0) { // Si la lista esta vacia pide un nombre
      alert("No se registraron nombres, por favor ingresa uno");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos); // Dependiendo la posicion sorteara el nombre
      let resultado = document.querySelector('#resultado'); // Se pasa al html el nombre sorteado
      resultado.innerHTML = Amigos[indiceAmigo]; // Se muestra el ganador
    }
}