//  you have to guess the output
var x = 20;
function foo(){
    console.log(x);
    var x= 10;
    
}
foo();
// it will be undefined because due to the variable hoisting in js it should be declared at \
// thre top of the scope


// what will be the output
function foo(){
console.log("hello world")

}

const result = foo();
console.log(result);

// Ans: it will be undefined beacuse it doesnt have implicit return value in foo function.
// to solve this issue we have to use return statement inside foo function...


// make an array and using for loop calculare its sum
let arr = [1,2,3,4,5];
let sum =0;
for(var i = 0; i < arr.length; i++){
  sum += arr[i];
}
console.log(sum);




// 2. What will be the order of the output of the following code
console.log("start")
setTimeout(() => {
    console.log("im settimeout")
}, 0);
console.log("end");


// start
// end
// im settimeout
// due to asynchronous function excution settimeout