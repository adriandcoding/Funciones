//leer los inputs, botones y crear variables

const numeroActual = document.querySelector(".numero-turno");
const Turno_anterior = document.querySelector(".boton-anterior");
const Resetear_botón = document.querySelector(".boton-reset");
const Boton_siguiente = document.querySelector(".boton-siguiente");
const Introducir_numero = document.querySelector("#introducir_turno");
const Boton_enviar = document.querySelector(".boton-enviar");

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
function turnoAnterior(): void {
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
    turnoActual = parseInt((Introducir_numero as HTMLInputElement).value);
    numeroActual.innerHTML = turnoActual.toString().padStart(2, "0");
  }
}
// aplicando funciones

if (
  Turno_anterior !== null &&
  Turno_anterior !== undefined &&
  Turno_anterior instanceof HTMLButtonElement
) {
  Turno_anterior.addEventListener("click", turnoAnterior);
}

if (
  Boton_siguiente !== null &&
  Boton_siguiente !== undefined &&
  Boton_siguiente instanceof HTMLButtonElement
) {
  Boton_siguiente.addEventListener("click", turnoSiguiente);
}
if (
  Resetear_botón !== null &&
  Resetear_botón !== undefined &&
  Resetear_botón instanceof HTMLButtonElement
) {
  Resetear_botón.addEventListener("click", resetear);
}
if (
  Boton_enviar !== null &&
  Boton_enviar !== undefined &&
  Boton_enviar instanceof HTMLButtonElement
) {
  Boton_enviar.addEventListener("click", escribirTurno);
}
