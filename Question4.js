

// suppose u are given a arr of 1 to 5 number now we have to find the sqaure of each elemnt and return array usign for and map function
const arr = [1,2,3,4,5];
const newarr = [];
for(let i =0; i<arr.length; i++) {
    newarr.push(arr[i]*arr[i]);
}
console.log(newarr);
const newarra = arr.map((element)=>{
    return element*element;
})
console.log(newarr);