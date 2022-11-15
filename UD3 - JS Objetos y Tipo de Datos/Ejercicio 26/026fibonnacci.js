"use strict"

//creamos un array llamado Fibonacci y le dmaos los valores iniciales
let Fibonacci= [1,1]

//
for (let i = 2; i < 20; i++) {
    
    Fibonacci [i] = Fibonacci[i-1] + Fibonacci[i-2];
}
alert (Fibonacci);