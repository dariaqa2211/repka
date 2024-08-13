// 5.3 Строки


// https://learn.javascript.ru/string#sdelat-pervyy-simvol-zaglavnym

function ucFirst(str) {
  if (!str) return str;
  
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

alert( ucFirst("тест") );


// https://learn.javascript.ru/string#proverka-na-spam

function checkSpam(str) {
  let newStr = str.toLowerCase();
  return (newStr.includes('viagra') || newStr.includes('xxx'));
}

alert( checkSpam('buy ViAgRA now') ); // true
alert( checkSpam('free xxxxx') ); // true
alert( checkSpam("innocent rabbit") ); // false );


// https://learn.javascript.ru/string#usechenie-stroki

function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  else return str.slice(0, maxlength - 1) + "...";
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ); // = "Вот, что мне хотело…"
alert( truncate("Всем привет!", 20) ); // = "Всем привет!"


// https://learn.javascript.ru/string#vydelit-chislo

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true