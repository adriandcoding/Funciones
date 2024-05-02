//leer los inputs y botones

const Numero_actual:any= document.querySelector(".numero-turno");
const Turno_anterior = document.querySelector(".boton-anterior");
const Resetear_botón = document.querySelector(".boton-reset");
const Boton_siguiente = document.querySelector(".boton-siguiente");
const Introducir_numero:any = document.querySelector("#introducir_turno");
const Boton_enviar = document.querySelector(".boton-enviar");

let turnoActual =1
if (Numero_actual != null && Numero_actual !== undefined) {
  Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
}

// funciones
function resetear():void{
  turnoActual = 1;
  Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
}
function turnoAnterior():void{
  if (turnoActual > 1) {
    turnoActual--;
    Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
  }
}
function turnoSiguiente():void{
  turnoActual++;
  Numero_actual.innerHTML = turnoActual.toString().padStart(2, "0");
}
const escribirTurno=():number=>
  Numero_actual.innerHTML = Introducir_numero.value;

// aplicando funciones

if (Turno_anterior != null && Turno_anterior != undefined) {
  Turno_anterior.addEventListener("click", turnoAnterior);
}

if (Boton_siguiente != null && Boton_siguiente != undefined) {
  Boton_siguiente.addEventListener("click", turnoSiguiente);
}
if (Resetear_botón != null && Resetear_botón != undefined) {
  Resetear_botón.addEventListener("click", resetear);
}
if (Boton_enviar != null && Boton_enviar != undefined) {
  Boton_enviar.addEventListener("click", escribirTurno);
}


