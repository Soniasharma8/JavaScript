let myFavoriteFruits = [];
myFavoriteFruits.push("Apple");
myFavoriteFruits.push("Banana");
myFavoriteFruits.push("Cherry");

console.log(myFavoriteFruits);



//Question 2:

let myFavoriteFruits = ["Apple", "Banana", "Cherry"];
let numberofElements = myFavoriteFruits.length;
console.log(numberofElements);



function reverseString (str) {
    return str.split("").reverse().join("");
    }
    console.log(reverseString("Hello World"));
    // Output: "dlroW olleH"



function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("GFG"));

// 1. Create an array of 5 fruits and print the first and last element.
let arr = ["apple", "mango", "banana", "cherry", "kiwi"];
console.log(arr[1], arr[4]);

// 2. Add one new fruit at the end.
let fruit = ["apple", "mango", "banana"];
fruit.push("kiwi");
console.log(fruit);

// 3. Remove the last fruit
let fruit1 = ["apple", "mango", "banana"];
fruit1.pop();
console.log(fruit1);

// 4. Add one fruit at the start
let fruit2 = ["mango", "banana"];
fruit2.unshift("apple");
console.log(fruit2);

// 5. Remove the first fruit
let fruit3 = ["apple", "mango", "banana"];
fruit3.shift();
console.log(fruit3);

// 6. Find the length of your array.
let arrlength = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
console.log(arrlength.length);

// 7. Check if “mango” exists in the array
let fruit4 = ["apple", "mango", "banana"];
console.log(fruit4.includes("mango"));

// 8. Copy only first 3 fruits
let fruit5 = ["apple", "mango", "banana", "cherry", "kiwi"];
let sliced = fruit5.slice(0, 3);
console.log(sliced);

// 9. Remove 1 fruit from middle
let fruit6 = ["apple", "mango", "banana", "cherry"];
fruit6.splice(2, 1);
console.log(fruit6);

// 10. Create an array of numbers [10, 20, 30, 40, 50] → Use map() to double each number.
let number = [10, 20, 30, 40, 50];
let doubled = number.map((num) => num * 2);
console.log(doubled);

// 11. From the same array, use filter() to get numbers > 25.
let number1 = [10, 20, 30, 40, 50];
let filtered = number1.filter((num) => num > 25);
console.log(filtered);

//12. Use reduce() to find the sum of all numbers.
let number3 = [10, 20, 30, 40, 50];
let sum = number3.reduce((total, num) => total + num, 0);
console.log(sum);

//13. Find index of number 30 using indexOf().
let number4 = [10, 20, 30, 40, 50];
let value = number4.indexOf(30);
console.log(value);

//14. Reverse the array using reverse().
let number5 = [10, 20, 30, 40, 50];
number5.reverse();
console.log(number5);

//15. sort
let number6 = [30, 56, 79, 11, 29];
number6.sort();
console.log(number6);

//16. Create array of students: Remove "Riya", Add "Raj" at position 2.
let students = ["Aman", "Sonia", "Riya", "Neha"];
students.splice(2, 1, "Raj");
console.log(students);

//17. Create array of prices [100, 200, 300, 400] increase each price by 10%., to get prices greater than 250.
let price = [100, 200, 300, 400];
let increase = price.map((num) => num * 1.1);
let filter = increase.filter((num) => num > 250);
console.log(filter);

//18. Combine two arrays:

let boys = ["Aman", "Raj"];
let girls = ["Sonia", "Riya"];
let combine = boys.concat(girls);
console.log(combine);

//19. → Find the first number greater than 10
let data = [2, 5, 8, 12, 15];
let serarch = data.find((num) => num > 10);
console.log(serarch);

//20. nested array
let arr1 = [1, [2, 3], [4]];
let newa = [1, [2, 3], [4]].flat();
console.log(newa);
//output:
mango kiwi
[ 'apple', 'mango', 'banana', 'kiwi' ]
[ 'apple', 'mango' ]
[ 'apple', 'mango', 'banana' ]
[ 'mango', 'banana' ]
11
true
[ 'apple', 'mango', 'banana' ]
[ 'apple', 'mango', 'cherry' ]
[ 20, 40, 60, 80, 100 ]
[ 30, 40, 50 ]
150
2
[ 50, 40, 30, 20, 10 ]
[ 11, 29, 30, 56, 79 ]
[ 'Aman', 'Sonia', 'Raj', 'Neha' ]
[ 330, 440.00000000000006 ]
[ 'Aman', 'Raj', 'Sonia', 'Riya' ]
12
[ 1, 2, 3, 4 ]
