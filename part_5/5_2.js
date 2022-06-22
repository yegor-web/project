// сумма пользовательских чисел
let a= +prompt('введите число',1);
let b= +prompt('введите число',1);
alert(a+b)

// ввод числового значения 
function readNumber() {
    let n;
do {
    n = +prompt('введите число', 1);
 } while (!isFinite(n));

  return +n;
}
  alert(`Число: ${readNumber()}`);

// случайное число
function random(min, max) {
  return min + Math.random() * (max - min);
}

