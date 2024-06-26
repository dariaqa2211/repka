let deepClone = obj => {
  if ( obj === null ) return null;
  
  // Создаем поверхностный клон оригинала.
  let clone = Object.assign( {}, obj );

  // Определяем, какие пары ключ-значение
  // необходимо глубоко клонировать.
  // Object.keys() возвращает массив, состоящий 
  // из имён свойств объекта (ключей).
  // Метод Array.prototype.forEach() применяет 
  // переданную ему функцию к каждому элементу массива.
  Object.keys(clone).forEach(
    key =>
      ( clone[key] =
        typeof obj[key] === "object" 
        ? deepClone(obj[key]) 
        : obj[key] )
  );

  // Проверяем является ли obj массивом и не пустой ли он
  if ( Array.isArray(obj) && obj.length ) {
    // Если obj массив и он не пуст, тогда
    // указываем объекту clone длину исходного массива что бы
    // конвертировать clone в массив и вернуть его.
    ( clone.length = obj.length ) && Array.from(clone)
  }
  // Если obj пустой массив,
  else if ( Array.isArray(obj) ) {
    // то возвращаем его
    return Array.from(obj)
  }
  // в других случаях obj это объект и мы возвращаем копию clone.
  else return clone;
};

// Вывод объекта
function displayObj(obj) {
  for ( let key in obj ) {
    typeof obj[key] === "object" 
      ? displayObj(obj[key])
      : alert ( key + ': ' + obj[key] );
  }
}

let a = { foo: "bar", obj: { a: 1, b: 2 } };
let b = deepClone(a);
displayObj(b);