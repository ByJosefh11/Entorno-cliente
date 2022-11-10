//creamos la variable calculator

let calculator = {

//creamos la funcion que defina a cada valor 
read:function(){

    this.a = prompt("Define el valor de a");
    this.b = prompt("Define el valor de b");


},

//creamos la funcion que suma el resultado de los dos valores

sum:function(){
                        //usamos number para evitar que se concatene
     let resultadosuma = Number (this.a) + Number (this.b) ;

return resultadosuma;
},

//creamos la funcion que muñtiplique el resultado de los dos valores

mul:function(){

    let resultadomult = this.a * this.b;

return resultadomult;
}


}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
