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








