//Creamos una variable sum que va guardando la suma de las variables
//En el caso que salarie esté vacio, no se ejecutará el for y saldra 0
let salaries = {Harry: 100, Ron: 160, Hermione: 130};

let sum=0;
for (persona in salaries){

    sum += salaries[persona]
}

alert(sum);



