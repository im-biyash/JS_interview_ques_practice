// const user ={
//     name: 'biyash',
//     id :2,
//     "like me": true,
// }
// console.log(user.name);
// console.log(user.id);
// console.log(user["like me"])

// create function multiplyByTwo(obj) that multiplies all numeric property values of num
// nums by 2

// let nums = {
//     a: 10,
//     b: 20,
//     title: "My nums"
// }

// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for(key in obj){
//       if( typeof obj[key]=== "number"){
//         obj[key] *= 2;

//       }
//     }
// }
// console.log(nums);
const user = {
    name: 'biyash',
    id :2,
   
};

const strobj = JSON.stringify(user);
console.log(strobj);       

const parsobj  = JSON.parse(strobj);   
console.log(parsobj);
