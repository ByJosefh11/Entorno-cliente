"use strict"


let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];


//Meter a Peter Pan al final del array disney.

disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan"});

//Pintar el array


for (let obj of disney) {
    document.write(obj.nombre+", "+obj.pelicula +"<br>");
}
//Meter a El capitán Garfio al principio del array, no olvides la película

disney.unshift({ nombre: "El capitán Garfio", pelicula: "Peter Pan"});

//Meter al cocodrilo detrás del capitán, no olvides la película

disney.splice(1, 0, { nombre: "El cocodrilo", pelicula: "Peter Pan"});

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.

let personajes = disney.filter(item => item.pelicula == "Peter Pan");
document.write("<br>");

for (let obj of personajes) {
    document.write(obj.nombre +"<br>");
}


//Encontrar el índice de Campanilla.

let FindCampanilla = disney.findIndex(item => item.nombre == "Campanilla");
document.write("<br>");
document.write(FindCampanilla);


//Buscar al cocodrilo.

let FindCocodrilo = disney.find(item => item.nombre == "El cocodrilo");
document.write("<br>");
document.write("<br>");
document.write(FindCocodrilo.nombre);


//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.

function shuffle(array) {
    array.sort(function compare(a,b){return Math.random()-0.5;})
}
shuffle(disney);

for (let obj of disney) {
    document.write(obj.nombre+", "+obj.pelicula +"<br>");
}