// Хранение отметок "не прочитано
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0])); 
messages.shift();

// Хранение времени прочтения
let mess = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
let readMap = new WeakMap();
readMap.set(mess[0], new Date(2017, 1, 1));