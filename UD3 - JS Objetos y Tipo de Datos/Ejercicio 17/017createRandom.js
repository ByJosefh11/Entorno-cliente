"use strict"
//creamos la funcion getRandomInt para generar un numero entre un minimo y un maximo
function getRandomInt(min, max) {

    //multiplicamos el Mathrandom(numero aleatorio 0 y 1) por la diferencia del maximo y el minimo
    //y luego sumamos el numero minimo, esto nos devolverá un resultado
    return min + Math.random() * (max-min); 

}

//imprimimos los numeros random
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

