"use strict"

let thor = "Thor es el hijo de Odín";

// Largo de la cadena

alert (thor.length);

//Encontrar la letra o

alert(thor.indexOf("o"));

//Encontrar el carácter que ocupa la posición 3

alert(thor.at(3));

//¿Qué carácter ocupa la posición 1?

alert(thor.at(1));

//Trocea la cadena usando los espacios en blanco

alert(thor.split(" "));

//Reemplaza Thor por Loki

alert(thor.replace("Thor", "Loki"));

//Recorta la cadena para que devuelva la palabra Odín

let posicion_Odin = thor.indexOf("Odín")
alert(thor.substring(posicion_Odin, posicion_Odin + 4));

//¿Puedes encontrar la letra a? Demuéstralo. 

//no lo va a encontrar porque no hay una letra a en la oracion

alert(thor.indexOf("a"));

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let largofrase = thor.length;
let mitadfrase = thor.length/2;

alert (thor.substring(0,mitadfrase).toLowerCase() + thor.substring(mitadfrase,largofrase));