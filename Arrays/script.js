// let myFavoriteFruits = [];
// myFavoriteFruits.push("Apple");
// myFavoriteFruits.push("Banana");
// myFavoriteFruits.push("Cherry");

// console.log(myFavoriteFruits);



//Question 2:

// let myFavoriteFruits = ["Apple", "Banana", "Cherry"];
// let numberofElements = myFavoriteFruits.length;
// console.log(numberofElements);



// function reverseString (str) {
//     return str.split("").reverse().join("");
//     }
//     console.log(reverseString("Hello World"));
//     // Output: "dlroW olleH"



function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("GFG"));

