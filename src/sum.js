function sum(...numbers) {
  var su = 0;
  for (let i = 0; i < numbers.length; i++) {
    su = su + numbers[i];
  }
  return su; // находим сумму массива и возвращаем ее
  // body
}

function avr(...numbers) {
  return sum(...numbers) / numbers.length; // делим возвращенную сумму на кличество елементов массива
}
module.exports = avr; //экспортируем модуль
