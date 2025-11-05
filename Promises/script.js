// Ek promise banao jo 2 second baad "Data received" return kare.
// Agar error aaye to "Error in fetching data" print karo.
// Promise ko .then() aur .catch() ke sath handle karo.
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dataAvailable = false;
      if (dataAvailable) {
        resolve("Fetch data successfully");
      } else {
        reject("Error in fetching Data");
      }
    }, 2000);
  });
}
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 2.
// Ek promise banao jo check kare ki number even hai ya odd.
// Agar even → resolve karo "Even number"
// Agar odd → reject karo "Odd number"
// Input number = 7
// Use .then() aur .catch() to print result.
function fetchData() {
  return new Promise((resolve, reject) => {
    let dataAvailable = 6;
    if (dataAvailable % 2 === 0) {
      resolve("This is a Even Number");
    } else {
      reject("This is a Odd Number");
    }
  });
}
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 3.
// Ek function checkLogin() banao jo promise return kare.
// Agar user name "Sonia" hai aur password "1234" hai → resolve karo "Login Successful"
// Nahi to reject karo "Invalid Credentials".
// Output ko .then() aur .catch() se handle karo.
function checkLogin(name, password) {
  return new Promise((resolve, reject) => {
    if (name === "Sonia" && password === "1234") {
      resolve("Login Successfull");
    } else {
      reject("Invalid credentials");
    }
  });
}
checkLogin("Sonia", "1234")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 4.
// Ek promise banao jo randomly resolve ya reject kare
// (50% chance dono ka).
// resolve → "Success ✅"
// reject → "Failed ❌"
// Result ko .then() aur .catch() se handle karo.

function randomPromise() {
  return new Promise((resolve, reject) => {
    console.log("Checking Random Result..........");
    setTimeout(() => {
      let success = Math.random() > 0.5;
      if (success) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
}
randomPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// 5.
// Ek function fetchUserData() banao jo promise return kare.
// 2 second baad "User data fetched" resolve kare.
// Phir ek aur .then() lagao jo "Processing user data..." print kare.
// (Use promise chaining)
function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data...");

    setTimeout(() => {
      resolve("User data fetched");
    }, 2000);
  });
}

fetchUserData()
  .then((message) => {
    console.log(message);
    return "Processing user data...";
  })
  .then((nextMessage) => {
    console.log(nextMessage);
  })
  .catch((error) => {
    console.log(error);
  });

// 👉 Write an async function greetUser() that waits for 2 seconds and then logs
// "Hello Sonia!" on the console.
// Use a Promise + await.
function greetUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let message = "Hello Sonia";
      resolve(message);
    }, 2000);
  });
}
async function fetchData() {
  try {
    let msg = await greetUser();
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// 👉 Create a function getNumber() that returns a Promise
// which resolves to 10 after 1 second.
// Then use an async function doubleNumber()
// which waits for that Promise and prints double of that number.

function getNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = 10;
      let double = number * 2;
      resolve(double);
    }, 1000);
  });
}
async function doubleNumber() {
  try {
    let msg = await getNumber();
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}
doubleNumber();

// 👉 Write an async function that calls two async tasks one by one:
// taskA() → resolves in 1 second with "Task A complete"
// taskB() → resolves in 1 second with "Task B complete"

function taskA() {
  return new Promise((res) => setTimeout(() => res("Task A Complete"), 1000));
}
function taskB() {
  return new Promise((res) => setTimeout(() => res("Task B Complete"), 1000));
}

async function runTasks() {
  console.log(await taskA());
  console.log(await taskB());
}
runTasks();

// 👉 Write an async function fetchData() that simulates an API call.
// If isSuccess = true, resolve with "✅ Data received"
// Else reject with "❌ Error fetching data"
// Handle both cases using try...catch.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = true;
      if (isSuccess) {
        resolve("✅ Data received");
      } else {
        reject("❌ Error fetching data");
      }
    }, 1000);
  });
}
async function dataFetch() {
  try {
    let result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
dataFetch();

// 👉 Create 3 async functions:
// step1(), step2(), step3(), each resolving after 1 second.
// Then write one async function that runs all 3 steps in order using
// await and finally prints "All steps done ✅".

function step1() {
  return new Promise((res) =>
    setTimeout(() => res("Step 1  is Completed"), 1000)
  );
}
function step2() {
  return new Promise((res) =>
    setTimeout(() => res("Step 2  is Completed"), 1000)
  );
}
function step3() {
  return new Promise((res) =>
    setTimeout(() => res("Step 3  is Completed"), 1000)
  );
}

async function finalResult() {
  console.log(await step1());
  console.log(await step2());
  console.log(await step3());
  console.log("All steps done");
}
finalResult();

//Ek promise banao jo 2 second ke baad "Hello from Promise" print kare (resolve kare).
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello From Promise")
    }, 2000)
})
myPromise.then((message) => {
    console.log(message)
})


//Ek promise banao jo 3 second ke baad reject ho jaye message ke sath "Something went wrong".
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went Wrong")
    }, 3000)
})
myPromise.catch((message) => {
    console.log(message)
})

//Promise ke andar setTimeout() use karke "Data Loaded" print karvao.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Loaded")
    }, 2000)
})
myPromise.then((message) => {
    console.log(message)
})
