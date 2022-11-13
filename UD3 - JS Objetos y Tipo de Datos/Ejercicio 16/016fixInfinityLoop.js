//Como vimos en el ejercicio 12, vemos como la consola no siempre redondea y nunca se sabe el numero exacto que va a salir.
//En resumen son numeros imprecisos los que imprime la consola.

"use strict"

let i = 0;
while (i != 10) {
  i += 0.2;

  alert(i);
}

