// 5.2 Числа


// https://learn.javascript.ru/number#summa-polzovatelskih-chisel

let num1 = +prompt("Число 1:");
let num2 = +prompt("Число 2:");

let sum = num1 + num2;
alert( `Сумма = ${sum}` );


// https://learn.javascript.ru/number#pochemu-6-35-tofixed-1-6-3

alert( Math.round(6.35 * 10) / 10 );


// https://learn.javascript.ru/number#vvod-chislovogo-znacheniya

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);


// https://learn.javascript.ru/number#beskonechnyy-tsikl-po-oshibke

let i = 0;
while (i != 10) {
  i += 0.2;
}

// Этот цикл – бесконечный. Он никогда не завершится, почему?
// Из-за потери точности при работе с десятичными дробями


// https://learn.javascript.ru/number#sluchaynoe-chislo-ot-min-do-max

function random(min, max) {
  return Math.random() * (max - min) + min;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


// https://learn.javascript.ru/number#sluchaynoe-tseloe-chislo-ot-min-do-max

function randomInteger(min, max) {
  let rand = Math.random() * (max + 1 - min) + min;
  return Math.floor(rand);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );