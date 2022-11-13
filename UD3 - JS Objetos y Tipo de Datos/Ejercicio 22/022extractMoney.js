"use strict"
 
let coste = prompt ("Escribeme el valor del coste en dolar");

//llamamos a  la funcion
extractCurrencyValue(coste);

//definimos la funcion extractCurrencyValue que sirve para quedarnos con el valor numerico de un coste
function extractCurrencyValue (str) {

    //si no empieza por dolar, imprimirá la frase escrita
    if (!str.startsWith("$")) {

        alert("Error, por favor introduce al principio el signo dolar ($) ");
    }else{

        //si empieza por dolar, empezará la palabra en la segunda posicion 
        let dato = str.substring(1);

        //si no es un numero, imprimirá la frase escrita
        if (!isFinite(dato)) {
    
            alert ("Error, ingresaste el signo dolar pero no un valor numerico");
            
        }else{
            //si es un numero, lo transforma a tipo numero y lo devuelve
            let resultado = Number(dato)
            alert (resultado);
            return resultado;

        }
    }
}
        