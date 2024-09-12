// Задача 1: Округление числа
// Описание: Напиши функцию roundToTwo, которая принимает число и округляет его до двух знаков после запятой.

function roundToTwo(num) {
  return +num.toFixed(2);
}
let num1 = roundToTwo(2.34567)
console.log( num1, typeof num1 ); // 2.35
console.log(roundToTwo(3.5678));  // 3.57


// Задача 2: Проверка на целое число
// Описание: Напиши функцию isInteger, которая проверяет, является ли переданное число целым.

function isInteger(num) {
  return Number.isInteger(num);
}

console.log(isInteger(4));    // true
console.log(isInteger(4.5));  // false
console.log(isInteger(-2));   // true
console.log(isInteger(0));    // true


// Задача 3: Сумма цифр числа
// Описание: Напиши функцию sumOfDigits, которая принимает число и возвращает сумму его цифр.

// решение без массива
function sumOfDigits(num) {
  let sum = 0;
  
  while (num !== 0) {
    sum += num % 10; //плюсуем последнюю цифру числа
    
    num = Math.trunc(num / 10); //удаляем эту цифру из числа
  }
  
  return sum;
}

console.log(sumOfDigits(123)); // 6 (1 + 2 + 3)
console.log(sumOfDigits(456)); // 15 (4 + 5 + 6)

// через массив
function sumOfDigits(num) {
  let arr = num.toString().split('');
  
  let sum = 0;
  return sum = arr.reduce( (acc, item) => acc + +item, 0 );
  
}

console.log(sumOfDigits(123)); // 6 (1 + 2 + 3)
console.log(sumOfDigits(456)); // 15 (4 + 5 + 6)


// Задача 4: Найти количество цифр в числе
// Описание: Напиши функцию countDigits, которая принимает целое число (может быть отрицательным) и возвращает количество цифр в этом числе. Знак минус, если число отрицательное, не учитывается.

function countDigits(num) {
  num = +num;
  
  let str = num.toString();
  
  return str.length;
}

console.log(countDigits(12345));   // 5
console.log(countDigits(-9876));   // 4
console.log(countDigits(0));       // 1
console.log(countDigits(1001));    // 4
console.log(countDigits(-0));      // 1