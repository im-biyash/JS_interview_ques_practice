// 1.User  whats the difference between == and === in javascript?

// In JavaScript, == and === are comparison operators used to compare values. However, they differ in terms of both their behavior and the types of comparison they perform:

// Loose Equality (==):

// The == operator performs type coercion, meaning it converts the operands to the same type before making the comparison.
// If the types of the operands are different, JavaScript will attempt to convert one or both of them to a common type.
// After the conversion, the actual values are compared.
let a = "5" == 5; // true (string '5' is coerced to the number 5)

console.log(a);

// Strict Equality (===):
// The === operator, also known as strict equality, does not perform type coercion.
// It checks both the values and their types to determine equality. If the types are different, the comparison results in false.
let b = "5" === 5; // false (string '5' is not equal to the number 5 when considering types)
console.log(b);

// what are promisese and how do hey work?

// Promises in JavaScript are a way to handle asynchronous operations more elegantly and efficiently.
// They provide a cleaner and more readable syntax for writing asynchronous code compared to traditional
// callback-based approaches. A promise represents the eventual completion or failure of an asynchronous
//  operation and its resulting value.

const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (fetching data)
    fetch('https://jsonplaceholder.typicode.com/todos/1')

      .then(data => {
        // Operation successful, resolve with the parsed data

        resolve(data.json());
      })
      .catch(err => {
        // Operation failed, reject with the error
        reject(err);
      });
  });

  myPromise
    .then(data => {
      // Handle the successful completion (fulfillment) of the promise
      console.log('Fetched data:',data );
    })
    .catch(error => {
      // Handle the failure (rejection) of the promise
      console.error('Error fetching data:', error);
    });


// 3.can u give me the order of the output of following with resaons
console.log("Start");

// Microtask (Promise)
setTimeout(() => {
  console.log("Task 1");
}, 0);
Promise.resolve().then(() => {
  console.log("Microtask 1");
});
Promise.resolve().then(() => {
  console.log("Microtask 2");
});

console.log("End");

// Start
// End
// Microtask 1
// Microtask 2
// Task 1

// since start and end is synchronous code so it gets printed first and then 
// asynchropnous function goes to callback queue or  microtask queue
// microtask queue has more priority than callback queue and promises always goes to micotask queue
// therefore it gets executed first and then set time out that goes to callback queue