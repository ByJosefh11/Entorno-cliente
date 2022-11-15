"use strict"

//creamos la funcion getLastDayOfMonth para que nos de el ultimo dia del mes especificado 
function getLastDayOfMonth(año, mes) {

    //el dia 1 seria el dia 1 del mes, el dia 0 lo interpreta como el anterior al dia 1 
    let dia = new Date(año, mes + 1, 0);
    return dia.getDate();
  }
  
  alert( getLastDayOfMonth(2022, 11) );
  alert( getLastDayOfMonth(2023, 1) ); 
  alert( getLastDayOfMonth(2024, 2) );