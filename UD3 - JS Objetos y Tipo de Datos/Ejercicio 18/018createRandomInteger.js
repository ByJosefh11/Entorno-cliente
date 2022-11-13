"use strict";

"use strict"
//creamos la funcion randomInteger para generar un numero entero entre un minimo y un maximo
function randomInteger(min, max) {

    
    //multiplicamos el Mathrandom(numero aleatorio 0 y 1) por la diferencia del maximo y el minimo
    //y luego sumamos el numero minimo.
    let decimal = min + Math.random() * (max-min); 

    //el resultado anterior lo redondeamos con el Math.roung
    return Math.round(decimal);
}

//imprimimos los numeros random
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

