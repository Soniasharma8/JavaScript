 /*
// Question 1: Print Numbers 1 to 10

for (let i = 1; i <11; i++) {
    console.log(i);
}
// Question 2 :

for (let i = 1; i < 21; i++) {
    if(i % 2 === 0) {
        console.log(i);   
    } }

   

  // Question 3 :  

  for (let i = 1; i < 16; i++) {
    if ( i % 2 !== 0) {
        console.log(i);
    }
    }
  
// Question 4:  

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum of 1 to 5:", sum);
 
// Question 5: 

let factorial = 1;
for (let i = 1; i <= 5; i++) { 
    factorial *= i; 
}
console.log("Factorial of 5:", factorial);


// Question 6: 
for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
    
}



// Question 7:

for (let i = 10; i >= 1; i-- ) {
    console.log(i);
}



// Question 8:

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i <fruits.length; i++) {
    console.log(fruits[i]);
    
}


// Question 9:

let numbers = [3, 7, 1, 9, 2];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if(numbers [i] > max) {
        max = numbers[i];
    }
}
console.log(max);


// Question 10: Count Vowels in a String
let text = "hello world";
let vowelCount = 0;
let vowels = "aeiou";
for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log("Vowel count:", vowelCount);



// Question 11:
let a = "Hello";
for (let i =  0; i < 5; i++) {
    console.log(a);
}

*/

let nums = [1, 2, 3, 4, 5, 6];
let evenSum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        evenSum += nums[i];
    }
}
console.log("Sum of even numbers:", evenSum);