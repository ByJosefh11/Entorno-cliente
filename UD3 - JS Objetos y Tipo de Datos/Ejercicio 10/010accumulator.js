function Accumulator (startingValue) {

    this.value=startingValue;


    this.read=function(){
    
        let texto=prompt ("Introduce la cantidad a sumar");
        let sumar= Number (texto);
        this.value+=sumar;
    }

   
}

let accumulator = new Accumulator(1); // valor inicial 1
accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario
alert(accumulator.value); // muestra la suma de estos valores
