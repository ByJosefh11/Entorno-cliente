function temporizador(segundos) {
    setInterval(function(){
        console.log(segundos);segundos--;}

    ,1000,segundos);
    }

/*
function temporizador(minutos, segundos){
        tiempo=minutos*60+segundos;
        temporizador(tiempo);
    
    }


    he intentado hacer el de los minutos pero no me sale
*/