// Наследование от SyntaxError

class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = "FormatError";
    }
  }
  
  let err = new FormatError("ошибка форматирования");
  
  alert( err.message ); // ошибка форматирования
  alert( err.name ); // FormatError
  alert( err.stack ); // stack
  
  alert( err instanceof SyntaxError );