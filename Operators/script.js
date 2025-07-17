// Question 1: The value of num1 is 10 and the value of num2 is 5. Create a new variable sum and store the total of num1 and num2 in it. Print the sum in the console.

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum);

// Question 2: The value of appleCount is 20 and the value of eatenApples is 7. Create a variable remainingApples and store the count of remaining apples in it. Print remainingApples in the console.

let appleCount = 20;
let eatenApples = 7;
let remainingApples = appleCount - eatenApples;
console.log(remainingApples);

// Question 3: Multiplication: The value of pricePerItem is 15 and the value of quantity is 4. Create a variable totalCost and store the total cost in it. Print totalCost in the console.

let pricePerItem = 15;
let quantity =  4;
let totalCost = pricePerItem * quantity;
console.log(totalCost);

// Question 4: Division: The value of totalStudents is 50 and the value of groups is 10. Create a variable studentsPerGroup and calculate how many students will be there in each group. Print studentsPerGroup in the console.

let totalStudents = 50;
let groups = 10;
let studentsPerGroup = totalStudents / groups;
console.log(studentsPerGroup);

//Question 5: Modulus (Remainder): The value of total Chocolates is 23 and the value of students is 5. If every student gets equal number of chocolates, how many chocolates will be left? Create a variable remainingChocolates and store the remainder in it. Print remainingChocolates in the console.

let totalchocolates = 23;
let students = 7;
let remainingChocolates = totalchocolates % students;
console.log(remainingChocolates);


//Question 6: Create a variable score and set its initial value to 100. Now increase the score by 1 using increment operator. Print the final score in the console.

let score = 100;
score = score ++;
console.log(score); // Output: 101


//Question 7: Create a variable lives and set its initial value to 3. Now increase lives by 1 using decrement operator. Print the final lives in the console.
let lives = 3;
lives --;
console.log(lives); // Output: 2

 //Question 8: Create a variable minme and store your name (string) in it. Print minme in the console.

 let manyname = "string";
 console.log(manyname);
 

 //Question 9: The value of bank balance is 5000. You deposited 1500 rupees. Update the bank balance using += operator. Print the updated bank balance in the console.
    let bankBalance = 5000;
    let deposit = 1500;
    console.log(bankBalance += deposit);
    

 //Question 10: The value of totalbooks is 100. You sold 25 books. Update totalbooks using -= operator. Print the updated totalbooks in the console.

 let totalBooks = 100;
 let sell = 25;
 console.log(totalBooks -= sell); 

//Question 11: The value of policyAltitude is 50. You get double points. Update the policyAltitude using *= operator. Print the updated policyAltitude to the console.

let initialPoints = 50;
initialPoints*= 50;
console.log(initialPoints); 


//Question 12: The value of pizzaslices is 16. You divided the slices equally into 4 pieces. Update the pizzaslices using the /= operator. Open the updated pizzaslices in the console

let pizzaSlices = 16;
frnd = 4;
console.log(pizzaSlices/=frnd);


//Question 13: Check whether age1 (value 25) and age2 (value '25') are equal or not (using ==). Store the result in a boolean variable areAgesEqual and print it in the console.

let age1 = 25;
let age2 = '25';
let  areAgesEqual = age1 == age2;
console.log(areAgesEqual);


//Question 14: Now compare the same age1 (value 25) and age2 (value '25') with strict equality (===). Store the result in areAgesStrictlyEqual and print it in the console. What is the difference?

let age1 = 25;
let age2 = '25';
let  areAgesStrictEqual = age1 === age2;
console.log(areAgesStrictEqual);


//Question 15: Check if item_name (value 10) and item_name (value 20) are not equal or not. Store the result in arithmshdiff and print it in the console.

let itemA = 10;
let itemB = 20;
let areItemsDifferent = itemA != itemB;
console.log(areItemsDifferent);


//Question 16: Check if userScore (value 150) is greater than highScore (value 100). Store the result in isnewhighScore and print it in the console.

 let userScore = 150;
 let highScore = 100;
 let isNewHighScore = userScore > highScore;
 console.log(isNewHighScore);


//Question 17: Check if currentTemp (value 28) is less than or equal to maxTempAllowed (value 30). Store the result in isTempAcceptable and print it in the console.

  let currentTemp = 28;
 let maxTempAllowed = 30;
 let isTempAcceptable = currentTemp <= maxTempAllowed;
 console.log(isTempAcceptable);
   

//Question 18: The value of isLoggedIn is true and the value of hasPermission is false. Check if the user is logged in and has permission (using &&). Store the result in canAccess and print it in the console.

let isLoggedIn = true;
let hasPermission = false;
let canAccess = isLoggedIn && hasPermission;
console.log(canAccess);


//Question 19:  The value of isWeekend is false and the value of isHoliday is true. Check whether today is a weekend or a holiday (using ||). Store the result in shouldRelax and print it in the console.

let isWeekend = false;
let isHoliday = true;
let shouldRelax = isWeekend || isHoliday;
console.log(shouldRelax);

//Question 20: The value of israining is true. Check that it is not raining (using!). Store the result in isnotraining and print it in the console.

let isRaining = true;
let isNotRaining = !isRaining;
console.log(isNotRaining);
