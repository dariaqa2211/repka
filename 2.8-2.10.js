//2.8 Базовые операторы, математика

//Постфиксная и префиксная формы
/*
let a = 1, b = 1;

let c = ++a; // c = 2
let d = b++; // d = 1
alert(`c = ${c} , d = ${d}`);
*/

//Результат присваивания
/*
let a = 2;

let x = 1 + (a *= 2); //a = 4, x = 5
alert(`a = ${a} , x = ${x}`);
*/

//Преобразование типов
/*
x = "" + 1 + 0 // 10
x = "" - 1 + 0 // -1
x = true + false // 1 !
x = 6 / "3" // 2
x = "2" * "3" // 6
x = 4 + 5 + "px" // 9px
x = "$" + 4 + 5 // $45
x = "4" - 2 // 2
x = "4px" - 2 // NaN
x = "  -9  " + 5 // '  -9  5'
x = "  -9  " - 5 // -14
x = null + 1 // 1
x = undefined + 1 // NaN
x = " \t \n" - 2 // -2 !
alert(`${x}`)
*/

//Исправьте сложение
/* 
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + + b)
*/

// или
/*
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

a = +a;
b = Number(b);
alert(a + b)
*/

// или
/*
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b)
*/



//2.9 Операторы сравнения

//Операторы сравнения
/*
x = 5 > 4 //true
x = "ананас" > "яблоко" //false
x = "2" > "12" //true
x = undefined == null //true
x = undefined === null //false
x = null == "\n0\n" //false !
x = null === +"\n0\n" //false
alert(`${x}`)
*/


//2.10 Условное ветвление: if, '?'

//if (строка с нулём)
/*
if ("0") {
  alert( 'Привет' ); //выведется !
}
*/

//Название JavaScript
/*
let oficialJSName = prompt("Какое «официальное» название JavaScript?")

if (oficialJSName == 'ECMAScript')
{
  alert('Верно!')
}
else
{
  alert('Не знаете? ECMAScript!')
}
*/

//Покажите знак числа
/*
let num = prompt('Введите число: ')

if (num > 0)
{
  alert(1)
}
else if (num < 0)
{
  alert(-1)
}
else if (num == 0)
{
  alert(0)
}
else
{
  alert('Chislo vvedi , psina sutulaya')
}
*/

//Перепишите 'if' в '?'
/*
let result = (a + b < 4) ? 'Мало' : 'Много'
*/

//Перепишите 'if..else' в '?'
/*
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';
*/