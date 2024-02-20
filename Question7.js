
// 1 given a string reverse the string

let str = "Biyash is a good boy";
let reverseString = str.split("").reverse().join("");
console.log(reverseString);

// how can u distinguish array and objects in javscript
let anotherVariable = [];

if (Array.isArray(anotherVariable)) {
    console.log("It's an array!");
} else {
    console.log("It's not an array!");
}


// WRITE A FUNCTION THAT REVERSE A NUMBER

function reverseNumber(num){
 return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(2300));


// to check whether the string is palindroma or not
let str1 = "hacker";
if(str1 == str1.split("").reverse().join("")){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

// write a program to return the string with first letter fo each word int
// to capital letter

let str2 = "biyash is a bad boy";
let newString = str2.split(" ");
newString.forEach(function(element, index, arrindex){ 
    return arrindex[index] = element.charAt(0).toUpperCase() + element.substring(1);
})
console.log(newString);

// for optimization we simply can use map function

let str3 = "Biyash is a good boy";
let newStr = str3.split(" ").map((element)=>{
    return element.charAt(0).toUpperCase() + element.slice(1);
})
console.log(newStr);