// explain about variable hoisting


//   Hoisting in JavaScript is a behavior where variable and function declarations
//   are moved to the top of their containing scope during the compilation phase.
//   This means that regardless of where the declarations are made in the code,
//   they are processed before the code is executed

// Variables declared with var are hoisted to the top of their scope and initialized with the value undefined. 
// For example:.
console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
