// 4.5 Конструктор, оператор "new"


// https://learn.javascript.ru/constructor-new#dve-funktsii-odin-obekt

let obj = new Object;

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert( a == b ); // true


// https://learn.javascript.ru/constructor-new#sozdayte-kalkulyator-pri-pomoschi-konstruktora-new-calculator

function Calculator() {
  this.read = function() {
    this.a = prompt( "Введите a" );
    this.b = prompt( "Введите b" );
  },
  this.sum = function() {
    return +this.a + +this.b;
  },
  this.mul = function() {
    return this.a * this.b;
  }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// https://learn.javascript.ru/constructor-new#sozdayte-new-accumulator

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt( "Введите value" );
  }
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений