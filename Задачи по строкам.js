// Задача 1: Подсчёт символов в строке
// Описание: Напиши функцию countChars, которая принимает строку и символ, а затем возвращает количество вхождений этого символа в строке.

function countChars(str, char) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
    count++;
    }
  }
  
  return count;
}

console.log(countChars("hello world", "o")); // 2
console.log(countChars("javascript", "a"));  // 2
console.log(countChars("OpenAI", "p"));      // 1


// Задача 2: Проверка на палиндром
// Описание: Напиши функцию isPalindrome, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково с обоих концов, игнорируя регистр).

function isPalindrome(str) {
  str = str.toLowerCase();
  
  str = str.replace(/[^a-z0-9]/g, '');
  
  let reversedStr = str.split('').reverse().join('');
  
  return reversedStr === str;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true


// Задача 3: Проверка на вхождение подстроки
// Описание: Напиши функцию containsSubstring, которая принимает строку и подстроку, а затем возвращает true, если подстрока найдена в строке, и false в противном случае.

function containsSubstring(str, substr) {
  return str.includes(substr);
}

console.log(containsSubstring("hello world", "world")); // true
console.log(containsSubstring("javascript", "java"));   // true
console.log(containsSubstring("OpenAI", "open"));       // false


// Задача 4: Преобразование строки в заглавные буквы
// Описание: Напиши функцию capitalizeWords, которая принимает строку и преобразует каждое слово в строке так, чтобы первая буква была заглавной, а остальные — строчными.

function capitalizeWords(str) {
  let words = str.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  
  return words.join(' ');
}

console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javaScript is fun")); // "Javascript Is Fun"
console.log(capitalizeWords("OPENAI gpt"));  // "Openai Gpt"