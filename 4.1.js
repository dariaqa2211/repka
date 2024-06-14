//4.1 Объекты


// https://learn.javascript.ru/object#privet-object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// https://learn.javascript.ru/object#proverka-na-pustotu

function isEmpty(obj) {
  for (let key in obj) {
      return false
    }
    return true ;
}


// https://learn.javascript.ru/object#obekty-konstanty

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать? - да, будет
//потому что мы меняем свойство константы, т.е. ее содержимое 
user.name = "Pete";


// https://learn.javascript.ru/object#summa-svoystv-obekta

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

alert( getSum(salaries) );

function getSum(obj) {
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}


// https://learn.javascript.ru/object#umnozhaem-vse-chislovye-svoystva-na-2

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
    alert ( key + ': ' + obj[key] );
  }
}