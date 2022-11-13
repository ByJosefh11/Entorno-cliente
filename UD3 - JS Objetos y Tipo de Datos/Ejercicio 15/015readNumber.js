"use strict"
//hemos creado la funcion readNumber para comprobar lea un numero
function readNumber () {

  //creamos la variable dato y ponemos la x para simular que se ha metido texto al principio
  let dato = "x";
  
  //creamos el while y pedimos que mientras no sea un numero no puede salir del while
  while (!isFinite(dato)) {
    
    dato = prompt ("Ingrese un numero")
    
  }
  //usamos el if indicando que si no pones nada o lo cancelas, te devuelva null
  if (dato === null || dato === "") dato = null;

  return dato;

}
//llamamos a la funcion e imprimimos el resultado
let resultado = readNumber ();
alert (resultado);

