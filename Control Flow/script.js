/*
//Question 1: Positive, Negative or Zero?Create a variable num and store a number in it. Check: If the number is positive, print "Number is positive!". If the number is negative, print "Number is negative!". And if the number is zero, print "Number is zero!".

let num = 2;
if (num > 0) {
    console.log("Positive");
} else if 
(num < 0) {
    console.log("Negative");
} else 
    console.log("Zero");

 

//Question 2: 

let number = 10;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


//Question 3: 

let age = 15;
if (age >= 18) {
    console.log("You are Eligible for Voting.");
}
else {
    console.log("You are not Eligible for Voting");
}



//Question 4:

let purchaseAmount = 1100;
if (purchaseAmount > 1000) {
    console.log("You get a discount of 10%");
    } else {
        console.log("No discount");
        }



//Question 5:

let score = 51;
if (score >= 50 ) {
    console.log("Pass");
} else {
    console.log("Fail");
}


//Question 6:
let lightHouse = "Red";
if (lightHouse === "Red") {
    console.log("Stop");
} else if (lightHouse === "Yellow") {
    console.log("Ready");
    } else if (lightHouse === "Green") {
        console.log("Go");
        } else {
            console.log("Invalid light color.");
        }
          
 
//Question 7:

let marks = 75;
if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
    } else if (marks >= 75 && marks <= 89) {
        console.log("Grade B");
    } else if (marks >= 60 && marks <= 74) {
        console.log("Grade C");
    } else {
        console.log("Fail");
    }
      
      
  //Question 8:  

let dayNum = 8;
if (dayNum === 1) {
    console.log("Sunday");
} else if (dayNum === 2) {
    console.log("Monday");  
    } else if (dayNum === 3) {
        console.log("Tuesday");
        } else if (dayNum === 4) {
            console.log("Wednesday");
            } else if (dayNum === 5) {
                console.log("Thursday");
                } else if (dayNum === 6) {
                    console.log("Friday");
                    } else if (dayNum === 7) {
                        console.log("Saturday");
                        } else {
                            console.log("Invalid day number.");
                            }



 //Question 9: 

 let weather = "Rainy";
 if (weather === "Sunny") {
console.log("Bahar Ghumne Chale!");
} else if (weather === "Rainy") {   
console.log("Chhatri Lelo!");
} else if (weather === "Cloudy") {
console.log("Thanda Mausam Hai!");
} else {
console.log("Pata Nahin Kaisa Mausam Hai!");
}

 
//Question 10: 
let cuisine = "Italian";
if (cuisine === "Indian") {
console.log("Sarso da saag Makki di Roti");
} else if (cuisine === "Chinese") {
    console.log("Chowmein");
} else if (cuisine === "Italian") {
    console.log("Pizza");
} else {
 console.log("Tell me another cuisine!");
 }


//Question 11: 

let dayNum = 2;
switch (dayNum) {
 case 1:
    console.log("Sunday");
  break;
  case 2:
    console.log("Monday");
  break;
  case 3:
    console.log("Tuesday");
    break;
    case 4:
    console.log("Wednesday");
  break;
  case 5:
    console.log("Thursday");
  break;
  case 6:
    console.log("Friday");
  break;
  case 7:
   console.log("Saturday");
   break;
   default:
   console.log("Invalid day");
     break;
}
            

//Question 12: 

let num1 = 15;
let num2 = 5;

let operation = "/"; 
let result; 
switch (operation) {
  case "+": 
    result = num1 + num2;
    console.log(`Addition: ${num1} + ${num2} = ${result}`);
    break; 
  case "-": 
    result = num1 - num2;
    console.log(`Subtraction: ${num1} - ${num2} = ${result}`);
    break;
  case "*": 
    result = num1 * num2;
    console.log(`Multiplication: ${num1} * ${num2} = ${result}`);
    break;
  case "/": 
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
    } else {
      result = num1 / num2;
      console.log(`Division: ${num1} / ${num2} = ${result}`);
    }
    break;
  default: 
    console.log("Invalid operation!");
}



//Question 13:

let monthNum = 4;
switch (monthNum) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid Month Number");
}

*/