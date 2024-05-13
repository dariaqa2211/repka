//2.15 Функции

//Обязателен ли "else"?
/*
function checkAge(age) {
  if (age > 18) {
    return true; // Следующая функция возвращает true, если параметр age больше 18.
  } else {
    // ...
    return confirm('Родители разрешили?'); // В ином случае она запрашивает подтверждение через confirm и возвращает его результат
  }
}*/

// Будет ли эта функция работать как-то иначе, если убрать else?
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
//Будет работать так же
*/
/*
let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}
*/


//Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) { return age > 18 ? true : confirm('Родители разрешили?')}

// function checkAge(age) { return age > 18 || confirm('Родители разрешили?')}


//Функция min(a, b)

// function min (a, b) { return (a < b) ? a : b }
/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
// alert (min(1, 1))


//Функция pow(x,n)

/*
function pow (x, n) { 
  if (n < 1 || n % 1 != 0) {
    return "n - не целое число"
  }
  return x**n;
}

let x = prompt ("x = ", '');
let n = prompt ("n = ", '')
alert (pow(x, n))
*/
/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/
// alert (pow(1, 100))