"use strict"

//creamos la funcion checkSpam para comprobar si contiene las palabras escrita en el programa
function checkSpam(str) {

//ponemos toda la frase en minuscula para luego solo tener que buscar esas palabras en minuscula
let textominuscula = str.toLowerCase();

let contieneviagra = textominuscula.includes("viagra");
let contienexxx = textominuscula.includes("xxx");

//el resultado sera true si alguna de las palabras estan contenidas
let resultado = contieneviagra | contienexxx;
return resultado;

}

alert (checkSpam('compra ViAgRA ahora')); 
alert (checkSpam('xxxxx gratis'));
alert (checkSpam("coneja inocente"));
