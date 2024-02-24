// closures
// a closure is a function that has access to the parent scope, even after the parent function has returned.
// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

message = "good global";
function hello1() {
  message = "good morning";

  function hello2() {
    console.log("hello2" + message);
  }
  message = "biyash"
  return hello2;
}
let c = hello1();
c();
// output will be biyash we can change the name