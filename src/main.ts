//leer los inputs, botones y crear variables

const numeroActual = document.querySelector(".numero-turno");
const turnoAnterior = document.querySelector(".boton-anterior");
const resetearBoton = document.querySelector(".boton-reset");
const botonSiguiente = document.querySelector(".boton-siguiente");
const introducirNumero = document.querySelector("#introducir_turno");
const botonEnviar = document.querySelector(".boton-enviar");

let turnoActual = 1;

// funciones
function resetear(): void {
  
  if (
    numeroActual !== null &&
    numeroActual !== undefined &&
    numeroActual instanceof HTMLHeadingElement
  ) {
    turnoActual=1
    numeroActual.innerHTML=turnoActual.toString().padStart(2, "0");
  }
}
function turnoAnterior2(): void {
  if (
    turnoActual > 1 &&
    numeroActual !== null &&
    numeroActual !== undefined &&
    numeroActual instanceof HTMLHeadingElement
  ) {
    turnoActual--;
    numeroActual.innerHTML = turnoActual.toString().padStart(2, "0");
  }
}
function turnoSiguiente(): void {
  if (
    numeroActual !== null &&
    numeroActual !== undefined &&
    numeroActual instanceof HTMLHeadingElement
  ) {
    turnoActual++;
    numeroActual.innerHTML = turnoActual.toString().padStart(2, "0");
  }
}
function escribirTurno(): void {
  if (
    numeroActual !== null &&
    numeroActual !== undefined &&
    numeroActual instanceof HTMLHeadingElement
  ) {
    turnoActual = parseInt((introducirNumero as HTMLInputElement).value);
    numeroActual.innerHTML = turnoActual.toString().padStart(2, "0");
  }
}
// aplicando funciones

if (
  turnoAnterior !== null &&
  turnoAnterior !== undefined &&
  turnoAnterior instanceof HTMLButtonElement
) {
  turnoAnterior.addEventListener("click", turnoAnterior2);
}

if (
  botonSiguiente !== null &&
  botonSiguiente !== undefined &&
  botonSiguiente instanceof HTMLButtonElement
) {
  botonSiguiente.addEventListener("click", turnoSiguiente);
}
if (
  resetearBoton !== null &&
  resetearBoton !== undefined &&
  resetearBoton instanceof HTMLButtonElement
) {
  resetearBoton.addEventListener("click", resetear);
}
if (
  botonEnviar !== null &&
  botonEnviar !== undefined &&
  botonEnviar instanceof HTMLButtonElement
) {
  botonEnviar.addEventListener("click", escribirTurno);
}
