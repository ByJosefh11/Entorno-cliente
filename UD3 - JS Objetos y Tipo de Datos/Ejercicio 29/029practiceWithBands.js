"use strict"

var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];


//filtra los grupos por género obtenido aquellos que son de Heavy Metal.

"user strict"

let GrupoHeavyMetal = grupos.filter(item => item.genero == "Heavy Metal");
document.write("<br>");

for (let obj of GrupoHeavyMetal) {
    document.write(obj.nombre +"<br>");
}

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.

let FindColdPlay = grupos.find(item => item.nombre == "Cold Play");
document.write("<br>");
document.write("<br>");
document.write(FindColdPlay.nombre);

//¿En qué posición del array se encuenta “Cold Play”?

let FindIndexColdPlay = grupos.findIndex(item => item.nombre == "Cold Play");
document.write("<br>");
document.write(FindIndexColdPlay);

