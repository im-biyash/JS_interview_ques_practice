// Explain about var let and const
// scope

// var is functional scope
// let and var are block scope

// var name = "biaysh";
// name = "shrestha";
// console.log(name);

// let name2 = "prijal";
// name2 = "shrestha";
// console.log(name2);
// function modJs(love){
//     if(love){
//         let name = "Biyash";
//         const sname = "shrestha";
//     }
//     console.log("my name is" + name + "" + sname);
//     //  here let and var must e defeind in block scope
// // }
// modJs(true);
// function modJs(love){
//     if(love){
//         var name = "Biyash";
//         var sname = "shrestha";
//     }
//     console.log("my name is" + name + "" + sname);
// }
// modJs(true);

// var bestcoder = "hitesh";
// if(true){
//     var bestcoder = "Harry";
//     console.log(bestcoder);
// }
// console.log(bestcoder)
// output:Harry

let bestcoder = "hitesh";
if (true) {
  let bestcoder = "Harry";
  console.log(bestcoder);
}
console.log(bestcoder);
// output:harry hitesh
// outside block so
