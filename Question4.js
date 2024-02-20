

// suppose u are given a arr of 1 to 5 number now we have to find the sqaure of each elemnt and return array usign for and map function
const arr = [1,2,3,4,5];
const newarr = [];
for(let i =0; i<arr.length; i++) {
    newarr.push(arr[i]*arr[i]);
}
console.log(newarr);


const newarr1 = arr.map((element)=>{
    return element*element;
})
console.log(newarr1);

// we can also write in one line
const newarr2 = arr.map((element)=>element*element)     . 
console.log(newarr2);

// what will be its output
myFun();
 var myFun = function(){
    console.log("first")
 }

 myFun();

 function myFun() {
    console.log("second")
 }
 myFun();
//  its output is
// second
// first
// first