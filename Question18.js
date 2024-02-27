Array.prototype.extraProperty = "biyash"
const mynewArray = [1,2,3,4,5];
for(let v in mynewArray) {
   if(mynewArray.hasOwnProperty(v)){
       console.log(v);
   }
}