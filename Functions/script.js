/* *******************************Functions*********************************** */

function sayName() {
  console.log("s");
  console.log("o");
  console.log("n");
  console.log("i");
  console.log("a");
}

 sayName();

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbers(3, 10);

function loginUserMessage(userName) {
  if (userName) {
    console.log(`${userName} just logged in`);
  } else {
    console.log("please enter a username");
  }
}
 loginUserMessage();

 function calculateCartPrice(...num) {
 return num;
 }
 console.log(calculateCartPrice(200, 400, 500, 2000));

 functions declaration

function greet() {
  console.log("Hello, Welcome to the functions");
}

 greet();

//Parameters vs arguments

function data(name) {
  console.log("Hello " + name);
}
data("Functions");

returnn values

function sum(a, b) {
  return a + b;
}
let total = sum(5, 10);
console.log(total);

// function expression

const good = function () {
  console.log("This is a function expression");
};
 good();

// Arrow functions
const arrowFunction = () => {
  console.log("This is an arrow function");
};
 arrowFunction();

//First class functions
function shout(msg) {
  return msg.toUpperCase();
}
function processMessage(fn) {
  console.log(fn("hello world"));
}
 processMessage(shout);

//Higher order functions
function hof(x) {
  return function (y) {
    return x * y;
  };
}
let hofd = hof(5);
console.log(hofd(10));

//rest parameters vs spread operator

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(2000, 40000, 4500, 15000, 3240));

const user = {
  username: "sonia",
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user);

handleObject({
  username: "parul",
  price: 1999,
});

//arrays se data pass
const myNewArray = [13, 456, 754, 854, 7459];
function returnSecondValue(getArray) {
  return getArray[2];
}
console.log(returnSecondValue(myNewArray));
