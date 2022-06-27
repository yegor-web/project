// Вычислить сумму чисел до данного
// цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sumTo(100) );

//рекурсия
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert(sumTo(100));   

// по формуле
function sumTo(n) {
    return n * (n + 1) / 2;
  } 
alert(sumTo(100));

// факториал 
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  } 
alert( factorial(5) );

// Фибоначчи
function F(n) {
    return n <= 1 ? n : F(n - 1) + F(n - 2);
}

// Вывод односвязного списка
// цикл
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  }

// рекурсия 
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); 
  
    if (list.next) {
      printList(list.next);
    }
  }

// Вывод односвязного списка в обратном порядке
// рекурсия
    function Nexa(list) {

    if (list.next) {
        Nexa(list.next);
    }
    alert(list.value);
  }
  