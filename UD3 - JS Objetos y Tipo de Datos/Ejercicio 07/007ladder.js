//el fallo del codigo era que no devolvía el objeto, lo aplicamos usando el return.

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // muestra el peldaño actual
      alert( this.step );
      return this;

    }
  };
  

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0