// Создайте новый объект с помощью уже существующего
// работает правильно
function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); 

// некорректная работа
  function User(name) {
    this.name = name;
  }
  User.prototype = {}; 
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); 