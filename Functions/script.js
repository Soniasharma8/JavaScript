/* *******************************Functions*********************************** */
// 1️⃣ ✳️ Write a function that prints "Hello World" when called.
function greet() {
    console.log("Hello World")
}
greet();

// 2️⃣ ✳️ Write a function named add that takes two numbers and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(5,4));

// 3️⃣ ✳️ Write a function square that takes a number and returns its square.
function square(num) {
    return num * num;
}
console.log(square(5))
console.log(square(6))

//4️⃣ ✳️ Write a function isEven that checks if a number is even or odd. 👉 If even → return "Even", else "Odd".
function isEven(num) {
    if (num % 2 === 0) {
       return "even"
    } else {
    return "odd"
    }
}

console.log(isEven(5))
console.log(isEven(4))

//5️⃣ ✳️ Write a function findMax that takes two numbers and returns the greater number.
function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findMax(10,12))

//6️⃣ ✳️ Write a function greet that takes a name and prints "Hello, [name]!".
function greet(name) {
 console.log("Hello", name)
}
greet("Sonia")

//7️⃣ ✳️ Write a function multiply that takes three numbers and returns their product.

 function multiply(a,b,c) {
return a*b*c;
 }
console.log(multiply(2,2,2))
console.log(multiply(4,5,6))

//8️⃣ ✳️ Write a function countCharacters that takes a string and returns how many characters it has.
function countCharaters(str) {
    return str.length; 
}
console.log(countCharaters("This is a string"))

// 9️⃣ ✳️ Write a function getFullName that takes firstName and lastName and returns full name.
function getFullName(name) {
    console.log("Write Your Full Name: ", name)
}
getFullName("Sonia Sharma");

//🔟 ✳️ Write a function calculateArea that takes radius and returns the area of circle. 👉 Formula: πr² (use 3.14 for π)
function calculateArea(radius) {
  return 3.14 * radius * radius;
}
console.log(calculateArea(5)); // 78.5
console.log(calculateArea(10)); // 314
--------------------------------------------------------------------------------




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

