// Задача 1: Найти минимальный элемент в массиве
// Описание: Напишите функцию, которая принимает массив чисел и возвращает минимальное значение.

function findMin(arr) {
    return arr.reduce((x, y) => Math.min(x, y));
}

console.log(findMin([3, 5, 1, 9, 7])); // 1


// Задача 2: Найти индексы чётных чисел
// Описание: Напишите функцию, которая возвращает массив индексов чётных чисел.

function evenIndices(arr) {
    return arr.map((num, index) => num % 2 === 0 ? index : -1).filter(index => index !== -1);
}

console.log(evenIndices([3, 6, 7, 8, 2])); // [1, 3, 4]


// Задача 3: Найти среднее арифметическое массива
// Описание: Напишите функцию, которая принимает массив чисел и возвращает их среднее значение.

function average(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

console.log(average([1, 2, 3, 4, 5])); // 3


// Задача 4: Проверить, все ли элементы массива положительные
// Описание: Напишите функцию, которая проверяет, все ли элементы массива положительные.

function allPositive(arr) {
    return arr.every(num => num > 0);
}

console.log(allPositive([1, 2, 3, 4])); // true
console.log(allPositive([1, -2, 3, 4])); // false


// Задача 5: Найти первое число больше 10
// Описание: Напишите функцию, которая возвращает первое число в массиве, которое больше 10.

function findNumber(arr) {
    return arr.find(num => num > 10);
}

console.log(findNumber([1, 10, 9, 12, 5, 22])); // 12


// Задача 6: Найти длину каждого слова
// Описание: Напишите функцию, которая возвращает массив, содержащий длину каждого слова в строке.

function wordLengths(sentence) {
    return sentence.split(' ').map(word => word.length);
}

console.log(wordLengths("Hello world from JavaScript")); // [5, 5, 4, 10]


// Задача 7: Отсортировать массив по убыванию
// Описание: Напишите функцию, которая сортирует массив чисел по убыванию.

function sortArray(arr) {
    return arr.sort((a, b) => b - a) ;
}

console.log(sortArray([5, 1, 8, 3])); // [8, 5, 3, 1]


// Задача 8: Проверить, есть ли в массиве отрицательные числа
// Описание: Напишите функцию, которая проверяет, содержит ли массив отрицательные числа.

function hasNegative(arr) {
    return arr.some(num => num < 0);
}

console.log(hasNegative([1, -2, 3, 4])); // true
console.log(hasNegative([1, 2, 3, 4])); // false