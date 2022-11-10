function Calculator () {

    this.read=function(){
    
        this.a = prompt("Define el valor de a");
        this.b = prompt("Define el valor de b");
    
    }

    this.sum=function(){

    let resultadosuma = Number (this.a) + Number (this.b) ;
    
    return resultadosuma;

    }    

    this.mul=function(){
    
    let resultadomult = this.a * this.b;
        
    return resultadomult;

    }

}

    let calculator = new Calculator();
    calculator.read();
    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );

    