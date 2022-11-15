"use strict"

//creamos la funcion getWeekDay para montrar el dia de la semana en formato corto
function getWeekDay(fecha) {
    let dias = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return dias[fecha.getDay()];
  }
  //creamos la variable fecha para comprobar que funciona
  let fecha = new Date(2012, 0, 3); // 3 Jan 2012
  alert( getWeekDay(fecha) ); // debería mostrar "TU"



