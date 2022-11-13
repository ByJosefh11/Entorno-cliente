"use strict"

//creamos la funcion ucFirst para que nos coja la primera letra letra y nos lo devuelva en mayuscula
function ucFirst(string) {

    let primeraletra = string.at(0).toUpperCase();

    //pedimos que nos devuelva la primera letra en mayuscula y las demas tal y como yo se la he pasado
    return primeraletra + string.substring(1);
}

let palabra = prompt ("Escribeme una palabra");

alert (ucFirst(palabra));