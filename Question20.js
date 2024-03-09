// const num = [1,2,3,4,5,6,7,8,9];
// let sum = 0;
// nums.map(function (num){
//     sum += num
// })
// console.log(sum);

// const nums = [1,2,3,4,5,6,7,8,9];
// const newNum = nums.filter(function (num){
//     evenNUmbers = (num%2 == 0);
//     return evenNUmbers;
// })
// console.log(newNum);

const nums = [1,2,3,4,5,6,7,8,9];
let newNum = [];
for (let i = 0; i<nums.length; i++){
    if(nums[i]%2 == 0){
        newNum.push(nums[i]);
    }
}
console.log(newNum);


// for each
const num1 = [1,2,3,4,5,6,7,8,9];
let newNum1 = [];
num1.forEach(function(element){
    if(element%2 == 0){
        newNum1.push(element);
    }
})
console.log(newNum1)