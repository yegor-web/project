// Деструктурирующее присваивание
let user = { name: "John", years: 30 };
let {name, years: age, isAdmin = false} = user;
alert( name );
alert( age ); 
alert( isAdmin );

// Максимальная зарплата
function topSalary(salaries) {
let max = 0;
let maxName = null;

for(const [name, salary] of Object.entries(salaries)) {
  if (max < salary) {
    max = salary;
    maxName = name;
  }
}
return maxName;
}

