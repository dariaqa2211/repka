// 5.5 Методы массивов


// https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth

function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}

alert( camelize("background-color") ); // == 'backgroundColor';
alert( camelize("list-style-image") ); // == 'listStyleImage';
alert( camelize("-webkit-transition") ); // == 'WebkitTransition';


// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b );
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)


// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]


// https://learn.javascript.ru/array-methods#sortirovat-v-poryadke-po-ubyvaniyu

let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a );

alert( arr ); // 8, 5, 2, 1, -10


// https://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv

function copySorted(arr) {
  let newArr = arr.slice();
  return newArr.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)


// https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


// https://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша


// https://learn.javascript.ru/array-methods#transformirovat-v-obekty

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: user.name + ' ' + user.surname,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// https://learn.javascript.ru/array-methods#otsortirovat-polzovateley-po-vozrastu

function sortByAge(users) {
  return users.sort( (a, b) => a.age - b.age )
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


// https://learn.javascript.ru/array-methods#peremeshayte-massiv

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);


// https://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// https://learn.javascript.ru/array-methods#ostavit-unikalnye-elementy-massiva

function unique(arr) {
  let newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O


// https://learn.javascript.ru/array-methods#sozdayte-obekt-s-klyuchami-iz-massiva

