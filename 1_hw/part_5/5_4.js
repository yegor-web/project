// операции с массивами 
let mas=["Джаз","Блюз"];
mas.push("Рок-н-ролл")
mas[Math.floor((mas.length - 1) / 2)] = "Классика";
alert(mas.shift());
mas.unshift("Рэп", "Регги");

// сумма введенных чисел
function sumInput() {
let numbers = [];

while (true) {
  let value = prompt("Введите число", 0);
  if (value === "" || value === null || !isFinite(value)) break;
  numbers.push(+value);
}

let sum = 0;
for (let number of numbers) {
  sum += number;
}
return sum;
}  
alert( sumInput() );

// Подмассив наибольшей суммы 
function getMaxSubSum(arr) {
   let maxSum = 0; // если элементов не будет - возвращаем 0
  
   for (let i = 0; i < arr.length; i++) {
     let sumFixedStart = 0;
     for (let j = i; j < arr.length; j++) {
       sumFixedStart += arr[j];
       maxSum = Math.max(maxSum, sumFixedStart);
     }
   }
  
   return maxSum;
}