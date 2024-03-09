const num = [1,2,3,4,5,6,7,8,9];
let sum = 0;
nums.map(function (num){
    sum += num
})
console.log(sum);

const nums = [1,2,3,4,5,6,7,8,9];
const newNum = nums.filter(function (num){
    evenNUmbers = (num%2 == 0);
    return evenNUmbers;
})
console.log(newNum);