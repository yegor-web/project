// переведите текст 
function camelize(str) {
    return str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''); 
}

// фильтрация по диапозону 
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
// фильтрация по диапозону на месте
function filterRangeInPlace(arr, a, b) {
for (let i = 0; i < arr.length; i++) {
  let val = arr[i];
  if (val < a || val > b) {
    arr.splice(i, 1);
    i--;
  }
}}
  
// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );

// Скопировать и отсортировать массив
function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  alert( sorted );
  alert( arr );

//   Создать расширяемый калькулятор
function Calculator() {
this.methods = {
  "-": (a, b) => a - b,
  "+": (a, b) => a + b
};

this.calculate = function(str) {
  let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2]

  if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return this.methods[op](a, b);
}

this.addMethod = function(name, func) {
  this.methods[name] = func;
    };
  }

// Трансформировать в массив имен 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша

// Трансформировать в объект
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин

// отсортировать пользователей по возрасту
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }

//перемешайте массив
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

// получить средний возраст 
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

// оставить уникальные элементы массива
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }