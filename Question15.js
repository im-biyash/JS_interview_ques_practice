// Example of rest and spread operator
// spread:used to expand an array or objects
// rest: used to extract elements from an array
const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr,6,7,8,9];  /*used to copy the arrray*/
console.log(arr1);

// compose and merge using spread
const oldNumber = [1, 2, 3];
const newNumber = [4, 5, 6];
const allNumber = [100,...oldNumber, ...newNumber,200];
console.log(allNumber);

// string
const string = "Biyash";
let newstring = [...string];
console.log(newstring);
let capitalize = newstring[0].toUpperCase() + newstring.slice(1).join('');
console.log(capitalize);

