function pipeFunctions() {}

const multiply = (x, y) => x * y;
const add5 = (x) => x + 5;
const multiplyAndAdd5 = pipeFunctions(add5, multiply);

console.log(multiplyAndAdd5(5, 2)); // 15
console.log(multiplyAndAdd5(16, 2)); // 37

const ask = (str) => `${str} How are you?`;
const greeting = (name) => `Hello ${name}!`;
const sendName = (name) => name;
const sayHello = pipeFunctions(ask, greeting, sendName);

console.log(sayHello("John"));
// ("Hello John! How are you?");
console.log(sayHello("Derik"));
// ("Hello Derik! How are you?");
