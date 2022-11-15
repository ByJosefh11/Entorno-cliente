"use strict"

let disney = [
    { id: 1, nombre: "Hércules", pelicula: "Hércules" },
    { id: 2, nombre: "Megana", pelicula: "Hércules" },
    { id: 3, nombre: "Hades", pelicula: "Hércules" },
    { id: 4, nombre: "Campanilla", pelicula: "Peter Pan" },
    { id: 5, nombre: "Wendy", pelicula: "Peter Pan" }
];

function groupById(array) {
    return array.reduce(function (accumulator, item, index, array)  {
      array[item.id] = item;
      return array;
    }, {})
  }

  let resultado = groupById(disney);


  alert (resultado[0].id);

  for (let obj of resultado) {
    document.write(obj.nombre+", "+obj.pelicula +"<br>");
}
