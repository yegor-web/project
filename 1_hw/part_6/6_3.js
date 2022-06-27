// Сумма с помощью замыканий
function sum(a) {

    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
  }

// Фильтрация с помощью функции
// inBetween
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inBetween(3, 6)) );

//  inArray
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inArray([1, 2, 10])) );

// Сортировать по полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.forEach(user => alert(user.name)); 
  
  users.sort(byField('age'));
  users.forEach(user => alert(user.name)); 

//   Армия функций
function makeArmy() {
    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { 
        alert( i );
      };
      shooters.push(shooter);
    }
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); 
  army[5](); 