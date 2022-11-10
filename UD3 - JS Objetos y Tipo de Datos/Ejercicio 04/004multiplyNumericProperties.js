//Crearemos una funcion y meteremos un for, el for va ir recorriendo todas las propiedades y comparando si son del tipo number.
//Si en el caso que la propiedad es de tipo number se multiplicará por 2.

function multiplyNumeric(obj){

    for(propiedad in obj) {
        let dato = menu [propiedad];
        let tipodedato = typeof[dato];
        if (tipodedato="number"){
            obj[propiedad]=dato*2;

        }

    }

}
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

  multiplyNumeric(menu);
  for(propiedad in menu) {

    alert(menu[propiedad]);

  }

