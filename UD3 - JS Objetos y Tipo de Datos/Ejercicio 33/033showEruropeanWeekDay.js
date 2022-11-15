"use strict"

//creamos la funcion getLocalDay para que el domingo nos devuelva el 7 en vez del 0 
function getLocalDay(fecha) {

    let dia = fecha.getDay();
  
    if (dia == 0) { 
      dia = 7;
    }
  
    return dia;
  }

  alert(getLocalDay(new Date(2002,1,19)));