/* -------------------- Practice Set -------------------- */


// step 1 variables

 let name = "Sonia";
 const age = 26;
 var city = "Ludhiana";

 console.log(name,age,city);


 let fruit = "Mango";
 console.log(fruit);
 
//Step 2: Data Types

let student = {name: "Sonia", age: 23};
let marks = [20,30,40];
console.log(typeof student, typeof marks);


let colors = ["red", "green", "blue"]
console.log(colors);


//Step 3: Operators
let a = 10;
let b = 20;
console.log(a + b);
console.log(a > b);
console.log(a === b);


let x = 7;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//Step 4: Conditions

let age1 = 17;
 if(age1 >= 18) {
    console.log("Adult")
 } else {
    console.log("Not adult")
 }

 let num = 10;
 if(num % 2 === 0) {
    console.log("Even")
 } else {
    console.log("Odd")
 }

 //Step 5: Loops
  for (let i = 1; i<=5; i++) {
     console.log(i);
  } 

 for( let i = 1; i<=10; i++) {
    console.log(i);
 } 

    //Step 6: Functions
    function greet(name) {
        return "Hello" + name;
    }
    console.log(greet(" Sonia"));

    function greet1(num , num1) {
        return "Sum of Two Numbers = " + num + num1;
    }
    console.log(greet1(10+20))
      

    //Step 7: Arrays
    let fruits = ["Mango", "Apple", "Banana"];
    console.log(fruits[0]);
    console.log(fruits.length);
    

    let nums = [1,2,3,4];
    let doubled = nums.map(n => n * 2);
    console.log(doubled);
    

    let numbers = [2,4,6,8,10]
    let sqaure = numbers.map(n => n * n);
    console.log(sqaure);

    //Step 8: Objects
    let person = {
        name: "Sonia",
        age: 22,
        city: "Delhi"
    };
    console.log(person.name);
    console.log(person["city"]);
        
    let car = {
        brand: "volvo",
        model: "audi1",
        year: 2023
    };
    console.log(car.brand, car.model)

    // Step 9: Loops with Arrays/Objects 
    let fruits1 = ["Mango", "Apple", "Banana"];
 for (let fruit of fruits) {
   console.log(fruit);
 }

let person1 = { name: "Sonia", age: 22 };
for (let key in person) {
  console.log(key, person[key]);
}

let colors1 = ["red", "green", "blue"];
for (let color of colors1) {
console.log(color);

    
}
