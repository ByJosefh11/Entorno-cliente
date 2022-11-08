let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false

function isEmpty(obj){

    //hemos cogido los valores del obj, luego el tamño y lo hemos guardado. Si la cantidad de valores es 0 no tiene propiedades y devolverá un true
    //en caso contrario devolverá un false
    
    let valoresguardados= Object.values(obj);
    let tamanio= valoresguardados.length;
    return (tamanio==0);

}