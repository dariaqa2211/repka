//2.11 Логические операторы

//Что выведет alert (ИЛИ)?
// alert( null || 2 || undefined ); //2

// alert( alert(1) || 2 || alert(3) ); //1й алерт: 1, 2й алерт: 2 !

//Что выведет alert (И)?
// alert( 1 && null && 2 ); //null

// alert( alert(1) && alert(2) ); //1й алерт: 1, 2йй алерт: undefined

//Что выведет этот код?
// alert( null || 2 && 3 || 4 ); //3

//Что выведет этот код (||=, &&=)?
/*
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value); //30
*/

//Проверка значения из диапазона
/*
let age;

if (age >= 14 && age <= 90) //!
{
  alert(age)
}
*/

//Проверка значения вне диапазона
/*
let age = 91;

if (!(age >= 14 && age <= 90))
//if (age < 14 || age > 90)
{
  alert(age)
}
*/

//Вопрос об "if"
/*
if (-1 || 0) alert( 'first' ); //-1, выполнится
if (-1 && 0) alert( 'second' ); //0, не выполнится
if (null || -1 && 1) alert( 'third' ); //1, выполнится
*/

//Проверка логина
/*
let login = prompt ("Кто там?");
if (login === "Админ")
{
  let password = prompt ("Пароль?");
  if (password === "Я главный")
  {
    alert("Здравствуйте!")
  }
  else if (password === null || password === "")
  {
    alert ("Отменено")
  }
  else
  {
    alert ("Другое")
  }
}
else if (login === null || login === "")
{
  alert ("Отменено")
}
else
{
  alert ("Я вас не знаю")
}
*/