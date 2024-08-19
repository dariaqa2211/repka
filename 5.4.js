// 5.4 Массивы


// https://learn.javascript.ru/array#skopirovan-li-massiv

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4


// https://learn.javascript.ru/array#operatsii-s-massivami

let styles = ["Джаз", "Блюз"];
alert( styles );

styles.push("Рок-н-ролл");
alert( styles );

function replaceCenter (mass, value) {
  return mass[Math.floor(mass.length / 2)] = value;
}
replaceCenter( styles, "Классика" );
alert( styles );

alert( styles.shift() );
alert( styles );

styles.unshift("Рэп", "Регги");
alert( styles );


// https://learn.javascript.ru/array#vyzov-v-kontekste-massiva

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); //a,b,function(){ alert( this ); }


// https://learn.javascript.ru/array#summa-vvedyonnyh-chisel

function sumInput() {
  let mass = [];

  while (true) {
    let value = prompt("Введитe число:", 0);
    if (value === null || value === "" || !isFinite(value)) break;
    mass.push(+value);
  }
  alert( mass );

  let sum = 0;
  for (let item of mass) {
    sum += item;
  }
  return sum;
}

alert ( sumInput() );


// https://learn.javascript.ru/array#podmassiv-naibolshey-summy

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0