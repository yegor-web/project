// Используя оператор ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

// Используя оператор || (самый короткий вариант)
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

// min
function min(a,b){
    return a>b?a:b;
}

// pow 
function pow(x, n) {
    let stepen = x;
  
    for (let i = 1; i < n; i++) {
        stepen *= x;
    }
  
    return stepen;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert('введите натуральную степень');
  } else {
    alert( pow(x, n) );
  }

//стрелочные функции 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    ()=> alert("Вы согласились."),
    ()=> alert("Вы отменили выполнение.") 
  );