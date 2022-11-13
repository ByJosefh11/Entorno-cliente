"use strict"

//creamos la funcion truncate para limitar la longitud de un texto
function truncate(str, maxlength){

    //creamos una variable que mida el tamaño del texto 
let tamaño = str.length;    

let resultado;
if (tamaño>maxlength){

    //el resultado acabara terminando con "..." si el tamaño del texto es mas grande que el limite requerido
    resultado = str.substring(0, maxlength)+ " ...";

}else{

    resultado = str;
}

return resultado ;

}

let palabra = prompt ("Escribeme una frase");
let letraslimite = prompt ("Escribeme el limite de letras");

alert (truncate(palabra,letraslimite));




