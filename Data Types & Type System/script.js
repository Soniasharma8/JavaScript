//Question 1: Create a variable myage and store your age (e.g., 25) in it. What will be its output in the console?

var myage = 25;

console.log(typeof myage);


//Question 2: Create a variable myname and store your name (e.g., "Rahul") in it. What will be its type?

var myName = "Rahul";

console.log(typeof myName);


//Question 3: Create a variable isStudent and store true in it. What will be its typeof?

var isStudent = true;

console.log(typeof isStudent);


//Question 4: Create a variable price and store 19.99 in it. What will be its typeof?

let price = 19.99;
console.log(typeof price);


//Question 5: Create a variable nullvalue and store null in it. What will be its typeof?

let nullValue = null;
console.log(typeof nullValue);


//Question 6: Create a variable myVariable and do not assign any value to it. What will be its typeof?

let myVariable;
console.log(myVariable); 

//Question 7: Create a simple array myarray = [1, 2, 3]; what will be its typeof?

let myArray = [1,2,3];
console.log(typeof myArray);


//Question 8: create a simple object mObject = {name:"Kabir", forward:30}; what will be its TPaw?

let myObject = {name: "Kabir", age: 30};

console.log(typeof myObject);

//Question 9: What are the "primitive data types" in JavaScript? Name at least 5.
Answer: The primitive data types in JavaScript are:
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol 
7. BigInt 

//Question 10: What is the difference between string and number data types? Give one example each.
Answer: The difference between string and number data types is that string is a sequence of characters and
number is a numerical value. Here are examples of each:
string: "Hello, World!"
number: 123.45


//Question 11: What is boolean data type? Explain with examples.
Answer: The boolean data type is a primitive data type that can have one of two values:  
true or false. Here are examples of each:
true: 5 > 3   
false: 5 < 3



//Question 12: What is the difference between undefined and null? When do we see undefined and when do we see null?

Answer: The difference between undefined and null is that undefined is a primitive data type that is used
when a variable has been declared but has not been assigned a value. Null is a primitive data
type that is used when a variable has been assigned a value of null. Here are examples of
each:
undefined: let myVariable;
null: let myVariable = null;


//Question 13: Give an example of a scenario where you might need virtual data types.
Answer: Virtual data types are not a real thing in JavaScript. I think you meant to ask   
about primitive data types. Here's an example of a scenario where you might need primitive data types
: Let's say you're building a game and you need to store the player's score.
You could use a primitive data type like number to store the score, like this: let scor
e = 1000;

//Question 14: What is symbol data type for? Give a simple explanation.
Answer: The symbol data type is used to create unique and immutable values. It is used wh
en you need to create a value that cannot be changed or duplicated.// Here's an example of
//how to create a symbol:  let mySymbol = Symbol("my symbol"); 



//Question 15: What will be the result of 10 + "5"? And why?
Answer: The result of 10 + "5" will be "105". This is becaus
e JavaScript is trying to convert the number 10 to a string and then concatenate it with th   
e string "5". This is known as type coercion. It's generally not a good idea
to rely on type coercion, as it can lead to unexpected results. It's better to b
e explicit about the types of your variables. For example, you could use template literals to
achieve the same result in a more explicit way: `10 + ${5}`.

let a = 10;
let b = "5";
let value = a+b;
console.log(value);


//Question 16: What will be the result of "10" - 5? And why?
Answer: The result of "10" - 5 will be NaN (Not a Number).
This is because JavaScript is trying to convert the string "10" to a number, but it
cant do that because the string "10" is not a valid number. So it returns
NaN instead. If you want to perform arithmetic operations on strings, you need to convert them to
numbers first, like this: Number("10") - 5.
let a = "10";
let b = 5; 
let value = a - b;
console.log(value);

//Question 17: What will be the result of True + 1? And why?
Answer: The result of True + 1 will be 2. This is because in JavaScript
, True is equivalent to 1 and False is equivalent to 0. So when you add
1 to True, you re essentially adding 1 to 1, which gives you 2
let a = true;
let b = 1;
let value = a + b;
console.log(value);


//Question 18: Suggest two ways to convert the string "123" into a number.\
Answer: There are two ways to convert the string "123" into a number:
1. Using the Number() function: let num = Number("123");
2. Using the parseInt() function: let num = parseInt("123");
let a = "123";
let b = Number(a);
let c = parseInt(a);
console.log(b);
console.log(c);



//Question 19: Tell me how to convert number 456 into a string.
Answer: You can convert the number 456 into a string using the toString() method or th
e String() function. Here are a few ways to do it:
1. Using the toString() method: let str = 456.toString();
2. Using the String() function: let str = String(456);
let a = 456;
let b = a.toString();
let c = String(a);
console.log(b);
console.log(c);


//Question 20: Is null == undefined true or false? And null === undefined? What is the difference between these two operators (== and ===)?
Answer: null == undefined is true, but null === undefined is false.
The == operator checks if the values are equal, but it also performs type coercion if necessary.
The === operator checks if the values and the types are equal. In this case, null and
undefined are not the same type, so === returns false.
let a = null;
let b = undefined;
console.log(a == b);
console.log(a === b);


//Question 21: NaN (Not-a-Number) is a special value in JavaScript. What will be the output of console.log(typeof NaN); and why? Is NaN === NaN true or false? Explain.
Answer: The output of console.log(typeof NaN) will be "number". This is because NaN
is a number, even though it's a special value that doesn't represent a valid number.
NaN is not equal to any number, including itself. This is why NaN === NaN returns fals
e. This is a quirk of the JavaScript language, and it can sometimes cause problems wh
en working with NaN values.
 let a = NaN;
console.log(typeof a);
 console.log(a === a);


//Question 22: Object and Primitive Comparison: Explain why {} == {} and [] == [] gives false result while 1 == 1 gives true. Explain the concept of reference equality and value equality in JavaScript.

 {} == {} and [] == [] gives false because JavaScript compares objects and arrays according to their memory location (reference). Every {} or [] expression creates a new and unique object/array in the memory.

 But 1 == 1 gives true because JavaScript compares primitive values (like numbers, strings, booleans) according to their actual value. 1 is a primitive value and the value of 1 is equal to 1.


//Question 23: Type Coercion Nuances: Predict the output and explain why it occurs:

console.log(" " + 0);
console.log("" - 1);
console.log(null + 1);
console.log(undefined + 1);
console.log([] + {});
console.log({} + []);


//Question 24: Symbol with json.stringify(): Can you stringify a property with a symbol key with json.stringify()? Give an example and explain what happens.

    const myUniqueId = Symbol('user_id');
    const user = {
        name: 'Sonia',
        age: 30,
        [myUniqueId]: "sonia123"
    };
    console.log("Original Object:");
    console.log(user);
    const jsonString = JSON.stringify(user);
    console.log("\nJSON String after stringify():");
    console.log(jsonString);
    const parsedObject = JSON.parse(jsonString);
    console.log("\nParsed Object from JSON String:");
    console.log(parsedObject);


//Question 25: Boxing (Wrapper Objects): Explain how JavaScript allows access to the length property or toUpperCase() method on a primitive value (such as the string "hello"), even though primitives are not objects. What is this concept called?

    let myString = "hello";
    console.log(myString.length);
    console.log(myString.toUpperCase());
    
    let myNumber = 10;
    console.log(myNumber.toFixed(2));
    
    let myBoolean = true;
    console.log(myBoolean.valueOf());
    
 //Question 25: What is the difference between implicit type coercion and explicit type conversion? Give two examples of each.
    
The Implicit Coercion tab is when JavaScript automatically converts values (e.g., "5" + 2 becomes "52"). The JavaScript engine automatically converts types.

The Explicit Conversion tab is when the developer (you) manually converts values using specific functions or methods (e.g., Number("123") becomes 123, or String(456) becomes "456"). This is clearly visible in the conversion code.

let num = 10;
let str = "Hello";
let result = str + num; // 'num' (10) automatically becomes a string "10"
console.log(result);    // Output: "Hello10"
console.log(typeof result); // Output: string

Converting to a Number:

JavaScript

let priceAsString = "99.99";
let priceAsNumber = Number(priceAsString); // Explicitly converting string to number
console.log(priceAsNumber);    // Output: 99.99
console.log(typeof priceAsNumber); // Output: number

let quantityAsString = "5";
let quantityAsNumber = parseInt(quantityAsString); // Explicitly converting string to integer
console.log(quantityAsNumber); // Output: 5
console.log(typeof quantityAsNumber); // Output: number





