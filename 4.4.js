//4.4 Методы объекта, "this"


// https://learn.javascript.ru/object-methods#ispolzovanie-this-v-literale-obekta

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? - underfind, потому что объект user не был объявлен


// https://learn.javascript.ru/object-methods#sozdayte-kalkulyator

let calculator = {
  read() {
    this.a = prompt( "Введите a" );
    this.b = prompt( "Введите b" );
  },
  sum() {
    return +this.a + +this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// https://learn.javascript.ru/object-methods#tsep-vyzovov

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
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
