//Si se cumple. Creo una nueva variable y en la funcion a y b pido que la devuelvan. 

let c={};

function A() { return c }
function B() { return c }
let a = new A();
let b = new B();
alert( a == b ); // true
