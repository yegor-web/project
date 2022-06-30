//создайте калькулятор 
let calculator={
    read() {
        this.a=+prompt("A=",1);
        this.b=+prompt("B=",1);
    },

    sum() {
        return this.a+this.b
    },

    mul() {
        return this.a*this.b 
    }
}   

// цепь вызовов
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };