const nombre = 
document.getElementById("nombre");

const frase = 
document.getElementById("frase");

const boton =
document.getElementById("boton");

const tarjetas =
document.getElementById("tarjetas");

const mensajeAlerta = 
document.getElementById("mensaje-alerta");

const cerrarAlerta = 
document.getElementById("cerrar-alerta");

const botonEstilo =
document.getElementById("boton-estilo");

const selectorEstilos =
document.getElementById("selector-estilos");

const opcionesEstilo =
document.querySelectorAll(".opcion-estilo");

let estiloSeleccionado = "dreamy";

opcionesEstilo.forEach(function(opcion) {
    opcion.addEventListener("click", function() {
        const estiloElegido =
        opcion.dataset.estilo;

        estiloSeleccionado = estiloElegido;

        botonEstilo.textContent = 
        opcion.querySelector("span").textContent;

        selectorEstilos.style.display = "none";

    });
});

boton.addEventListener("click", 
function() {
const nombreTexto = nombre.value;

const fraseTexto = frase.value;

if (nombreTexto.trim() === "" || fraseTexto.trim() === "") {
   mensajeAlerta.style.display = "flex";
   return;
}

const tarjeta = 
document.createElement("div");
tarjeta.classList.add("tarjeta");
tarjeta.classList.add(estiloSeleccionado);

const emblema = document.createElement("img");

const emblemas = {
    "dreamy": "emblem-dreamy.png",
    "night": "emblem-night.png",
    "floral": "emblem-floral.png",
    "love-letter": "emblem-love-letter.png"
};

emblema.src = `images/${emblemas[estiloSeleccionado]}`;
emblema.alt = `Emblema ${estiloSeleccionado}`;
emblema.classList.add("emblema-tarjeta");

tarjeta.appendChild(emblema);

const nombreElemento = 
document.createElement("h3");
nombreElemento.textContent =
nombreTexto;
tarjeta.appendChild(nombreElemento);

const fraseElemento =
document.createElement("p");
fraseElemento.textContent =
fraseTexto;
tarjeta.appendChild(fraseElemento);

tarjetas.appendChild(tarjeta);
});

cerrarAlerta.addEventListener("click", function() {
    mensajeAlerta.style.display = "none";
});

botonEstilo.addEventListener("click", function(){
    if(selectorEstilos.style.display === "block") {
        selectorEstilos.style.display = "none";
    }

    else{
        selectorEstilos.style.display = "block";
    }

});








