const Numero_actual: any = document.querySelector(".numero-turno");
const Turno_anterior: any = document.querySelector(".boton-anterior");
const Resetear_botón: any = document.querySelector(".boton-reset");
const Boton_siguiente: any = document.querySelector(".boton-siguiente");
const Introducir_numero: any = document.querySelector("#introducir_turno");
const Boton_enviar: any = document.querySelector(".boton-enviar");
let turnoActual = 1;

function resetear() {
  turnoActual = 1;
  Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
}
function turnoAnterior() {
  if (turnoActual > 1) {
    turnoActual--;
    Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
  }
}
function turnoSiguiente() {
  turnoActual++;
  Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
}
function escribirTurno() {
  Numero_actual.innerHTML = Introducir_numero.value;
}

Turno_anterior.addEventListener("click", turnoAnterior);
Resetear_botón.addEventListener("click", resetear);
Boton_siguiente.addEventListener("click", turnoSiguiente);
Boton_enviar.addEventListener("click", escribirTurno);
