const nums = [1,2,3,4,5];
// suppose u have an array with some number of elemetns and u have to
// get the output after multplying each element with 5.use a map function

const output = nums.map((num)=> num*5)
// console.log(output);

// now can we give me example of filter 
// whats the difference between map and filter
// Ans:: filter method takes each array apply conditional function 
// returns only those elements which fulfill the filter condition
// but map used to return all elements of array return true for
// matched elements and false for not matched elements

const output2 = output.filter((num)=>{
    return num>10;
})
// console.log(output2);

const books = [
 { name: 'book1',
    genre:'English'},
    { name: 'book2',
    genre:'English'},
    { name: 'fiction',
    genre:'history'},
];

newbooks = books.filter((bk) =>{
return bk.genre === 'English'
})
// console.log(newbooks);

// now tell me about the reduce
const num = [1,2,3,4,5,6,7,8,9,10,11]
const mynums = num.reduce((acc,currval) =>{
    console.log(`acc: ${acc}`, `currval:${currval}`)
    return acc+currval
},0)
console.log(mynums);

// this is basic example of reduce where it takes two paramaeter 
// accumulator and current value and we can perform the reduction 
// using initial values inital value is added to accumulator at first only
