// Привет объект 
user={};
user.name=John;
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// проверка на пустоту 
function isEmpty(obj){
    for (let i in obj) {
        return false;
    }
        return true;
    }

// сумма свойств объекта 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }; 
let sum = 0;

for (let i in salaries) {
  sum += salaries[i];
}
alert(sum);

// умножаем все числовые свойства на 2 
function multiplyNumeric(obj){
    for (let i in obj) {
        if (typeof(obj[i]=='number')){
        obj[i] *= 2;}
}}
  