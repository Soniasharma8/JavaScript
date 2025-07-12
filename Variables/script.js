// Question 1: Declare a variable named myPathVariable and set its value to "Hello World!". Print this variable in console.log().

  var myPathVariable = "Hello World!"
  console.log(myPathVariable);  
  

//Question 2: Create a variable myAge and assign its value to your current age number. Then store a separate variable nextYearAge by adding 1 to the value of myAge. Print both variables in the console.

var myAge = 23;
var nextYearAge = myAge + 1;

console.log(myAge);
console.log(nextYearAge);


// Question 3: firstName naam ka ek variable banao aur usmein apna pehla naam string mein assign karo. Phir lastName naam ka ek aur variable banao aur usmein apna aakhri naam assign karo. Ab fullName naam ka ek teesra variable banao aur usmein firstName aur lastName ko jodkar assign karo. fullName ko print karo. 

let firstName = "Sonia";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log(fullName); 


// Question 4: Ek variable isStudent banao aur uski value true assign karo (boolean type). Phir ek aur variable isEmployed banao aur uski value false assign karo. Dono ko print karo.

let isStudent = "true";
let isEmployed = "false";
console.log(isStudent);
console.log(isEmployed); 


// Question 5: Create a variable price and assign it the value 25.50 (decimal number). Now create another variable named quantity and assign it the value 2 (integer number). Create a third variable named totalCost and store it by multiplying price and quantity. Print totalCost.

let price = 25.50;
let quantity = 2;
let totalCost = price * quantity;
console.log(totalCost);


// Question 6: Create a variable count and keep its initial value 0. Now increase the value of count by 5. Then print the updated value of count.

count = 0;
count = count += 5;
console.log(count);


//Question 7: Ek variable score banao aur uski value 100 rakho. Score ko 20 se kam karo. Phir updated score print karo.

let score = 100;    
score = score - 20;
console.log(score);


// Question 8: Create a variable message and assign "Hello" to it. Now add the string " World!" to the message variable. Print the final message.

let message = "Hello";
message = message += " world";
console.log(message);


// Question 9: Ek variable currentYear banao aur usmein current year number mein store karo (e.g., 2025). Ab currentYear ki value ko next year mein update karo. Updated currentYear ko print karo.

let currentYear = 2025;
currentYear = currentYear + 1;
console.log("Next Year:", currentYear);


// Question 10: Create a variable num and assign 10 to it. Now divide num by 2. Then print the updated num.

let num = 10;
num = num / 2;
console.log(num);


// Question 11: Create a variable piValue using const and assign its value 3.14. Can you change piValue later? Try it and if you get an error, show it in the console.

const piValue = 3.14;
console.log(piValue);


// Question 12: Create a variable userAge using let and set its value to 25. Then update userAge to 26. Print both the values (initial and updated).

let userAge = 25;       
console.log("Initial userAge:", userAge); 
userAge = userAge + 1; 
console.log("Updated userAge:", userAge); 


// Question 13: Create a variable appName using const and assign "My App" to it. Can you declare appName again (const appName = "New App";)? Try it and see the error.

const appName = "MyApp";
const appName = "NewApp";
console.log(appName);


//Question 14: Create a variable counter using let and set its value to 0. Increment the value of this variable by 1. Print the updated counter.

let counter = 0;
counter += 1;
console.log(counter);


// Question 15: Using let create a variable named temperature and assign 28.5 to it. Then update the value of temperature to 30.2. Print both the values.

let temperature = 28.5;
temperature += 1.7;
console.log(temperature);


// Question 16: Create two variables, num1 (value 15) and num2 (value 7). Create a third variable remainder and store the remainder after dividing num1 by num2. Print the remainder.

let num1 = 15;
let num2 = 7;
let remainder = num1 % num2;
console.log(remainder);


// Question 17: Create a variable isRaining and assign its value true. Now write an if statement to check whether isRaining is true or not. If true then print console.log("Baarish ho rahi hai!"); otherwise print console.log("Baarish nahi ho rahi.");

let isRaining = true;
if (isRaining) {
    console.log("Its Raining!");
} else {
    console.log("Its not Raining.");    
}


// Question 18: Create three variables: item1Price (value 10), item2Price (value 20), and item3Price (value 5). Create a variable totalBill and store the total price of the three items in it. Print the totalBill.

let item1Price = 10;
let item2Price = 20;
let item3Price = 5;
let totalBill = item1Price + item2Price + item3Price;
console.log(totalBill);


//Question 19: Create a variable firstName and assign "Rahul" to it. Now change the value of firstName to "Amit". Then change firstName to "Priya". Print firstName after every change.

let firstName = "rahul";
console.log(firstName);
firstName = "amit";
firstName = "priya";


//Question 20: Declare a variable myvariable but do not assign a value to it. Print its value in console.log(). What is the output?

let myVariable; 
console.log(myVariable); 