function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  let user = makeUser();
  alert( user.ref.name ); 


//El resultado de esta funcion es que no imprime el dato. Esto pasa porque cuando llama a la funcion el this no está defenido.