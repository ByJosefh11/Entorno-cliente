//creamos la funcion ucFirst para que nos coja la primera letra letra y nos lo devuelva en mayuscula
"use strict"

function ucFirst(string) {

    let primeraletra = string.at(0).toUpperCase();

    //pedimos que nos devuelva la primera letra en mayuscula y las demas tal y como yo se la he pasado
    return primeraletra + string.substring(1);
}

//creamos la funcion camelize para que nos transforme un string en snake case a camelcase

function camelize(string) {
    

    //separamos todas las palabras que estan entre barra bajas
    let array = string.split("_");

    //este for coge todas las palabras a partir de la segunda y llama a la funcion ucFirst
    for (let i = 1; i < array.length; i++) {
        
        array [i] = ucFirst(array [i]); 
        
    }
    let resultado = array.join("");

    alert (resultado);
    return resultado;
}

camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';

