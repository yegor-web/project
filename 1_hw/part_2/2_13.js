// выведите четные числа
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

// замена на while
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// повторять цикл, пока код неверен
let numb;
do {
  numb = prompt("Введите число, которое больше 100", 101);
} while (numb <= 100 && numb);  

// простые числа 
let num = 10;
next:
for (let i = 2; i <= num; i++) { 
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next; 
  }
  alert( i ); 
}
