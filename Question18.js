
// suppose u have an array and using loop we have to display only original proprty of array with additioal property


Array.prototype.extraProperty = "biyash"
const mynewArray = [1,2,3,4,5,6];
for(let v in mynewArray) {
   if(mynewArray.hasOwnProperty(v)){
       console.log(v);
   }
}

// hasown property function to check the property is present or not