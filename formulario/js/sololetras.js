var entrada = document.getElementById('nombre');
entrada.addEventListener('keypress',anexar);
var borrar = document.getElementById('borrar');
borrar.addEventListener('click',limpiar);
var salida = document.getElementById('salida');

function anexar(e){
  salida.innerHTML += e.key + '<br />';
}

function limpiar(e){
  entrada.value = '';
  salida.innerHTML = '';
}