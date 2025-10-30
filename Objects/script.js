// 1
let person = {
  name: "Sonia",
  age: 22,
  city: "Delhi",
};
console.log(person.city);

// 2
let car = { brand: "BMW", color: "black" };
car.color = "red";
console.log(car.color);

// 3
let student = {
  name: "sonia",
  greet: function () {
    console.log("Hello I am " + this.name);
  },
};
student.greet();

// 4
let laptop = {
  brand: "HP",
  price: 50000,
};
laptop.processor = "i5";
console.log(laptop);

// 5
let user = {
  name: "Aman",
};
let admin = user;
admin.name = "Riya";
console.log(user.name);

// 6
let movie = {
  title: "Action",
  year: 2015,
  actor_name: "Akshay Kumar",
};
for (let key in movie) {
  console.log(key, movie[key]);
}

// 7
let employee = {
  name: "Rohan",
  salary: 30000,
  department: "IT",
};
console.log(Object.keys(employee));
console.log(Object.values(employee));

// 8
let book = {
  title: "JS Guide",
  price: 400,
};
book.price = 500;
console.log(Object.freeze(book));

// 9
let student1 = {
  name: "Sonia",
  marks: {
    math: 95,
    english: 88,
  },
};
console.log(student1.marks.english);

//10
let users = [
  { name: "Aman", age: 21 },
  { name: "Sonia", age: 22 },
  { name: "Riya", age: 23 },
];
console.log(users[2].name);

//output: 
Delhi
red
Hello I am sonia
{ brand: 'HP', price: 50000, processor: 'i5' }
Riya
title Action
year 2015
actor_name Akshay Kumar
[ 'name', 'salary', 'department' ]
[ 'Rohan', 30000, 'IT' ]
{ title: 'JS Guide', price: 500 }
88
Riya
