const str = "hi my name is biyash shrestha";

// Split the string into an array of words
const array = str.split(" ");
console.log(array);

// Capitalize the first letter of each word
const newArray = array.map((element) => {
  return element.charAt(1).toUpperCase() + element.slice(1);
});

console.log(newArray);
