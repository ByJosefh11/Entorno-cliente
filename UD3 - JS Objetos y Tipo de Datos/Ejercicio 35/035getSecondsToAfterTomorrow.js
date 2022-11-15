"use strict"

function getSecondsToAfterTomorrow() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let totalHoy = (hora * 60 + minutos) * 60 + segundos;
    let totalDia = (60 * 60 * 24);
  
    return totalDia * 2 - totalHoy ;
  }

  alert(getSecondsToAfterTomorrow())