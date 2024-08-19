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

