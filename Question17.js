// for(var i = 0;i<3;i++){
//    setTimeout(() =>{
//         console.log(i);
//     }
//     ),1000}

//     // output : 3 3 3 because of var var doenst have block scope it have functin scope
//     for(let i = 0;i<3;i++){
//         setTimeout(() =>{
//              console.log(i);
//          }
//          ),1000}

//  we can also solve it using var using closure
for (let i = 0; i < 3; i++) {

    function inner(i){
        setTimeout(() => {
          console.log(i);
        }),
          2000;
    }
    inner(i);  
}
// due to closures output is 0 1 2 