//2.12 Операторы нулевого слияния и присваивания: '??', '??='

//Что выведет этот код?

// alert(undefined ?? NaN ?? null ?? "" ?? " "); //NaN

//Какой будет результат выполнения этого кода?
/*
let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); //Берлин
*/

//Перепишите код используя операторы ??, ??=
/*
let num1 = 10,
    num2 = 20,
    result;

result ??= (num1 ?? num2)
*/


//2.13 Циклы while и for

//Последнее значение цикла
/*
let i = 3;

while (i) {
  alert( i-- ); //1, т.к. на while (0) wbrk завершится, пушо это falsy значение
}
*/

//Какие значения выведет цикл while?

//1 Префиксный вариант ++i:
/*
let i = 0;
while (++i < 5) alert( i ); //выведет значения от 1 до 4
*/
//2 Постфиксный вариант i++
/*
let i = 0;
while (i++ < 5) alert( i ); //выведет значения от 1 до 5
*/
//Какие значения выведет цикл for?

//1 Постфиксная форма:

// for (let i = 0; i < 5; i++) alert( i ); //выведет значения от 0 до 4

//2 Префиксная форма:

// for (let i = 0; i < 5; ++i) alert( i ); //выведет значения от 0 до 4

//Выведите чётные числа
/*
for (let i = 2; i <= 10; i++ ) 
{
  if (i % 2 === 0) 
  {
    alert ( i )
  }
}
*/

//Замените for на while
/*
let i = 0;
while (i < 3)
{
  alert( `number ${i}!` );
  i++;
}
*/

//Повторять цикл, пока ввод неверен
/*
let numb;
do
{
  numb = prompt ("Введите число > 100")
}
while (numb <= 100 && numb) //или while (numb <= 100 || numb === null)
*/

//Вывести простые числа
/*
let n = 10
  , prostijeChisla = "2";
for (let i = 3; i < n; i++)
outLabel: 
{
  for (let j = 2; j < i; j++)
  {
    if (i % j === 0) break outLabel; 
  }
  prostijeChisla += ", " + i;
}
alert (prostijeChisla);
*/


//2.14 Конструкция "switch"

//Напишите "if", аналогичный "switch"
/*
let browser = 'Safari';
if (browser === 'Edge') {
 alert( "You've got the Edge!" );
}
else if (browser === 'Chrome'
 || browser === 'Firefox' 
 || browser === 'Safari' 
 || browser === 'Opera') {
 alert( "Okay we support these browsers too" );
}
else {
  alert( "We hope that this page looks ok!" );
}
*/

//Переписать условия "if" на "switch"
/*
const number = +prompt('Введите число между 0 и 3', '');
switch (number){
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
*/