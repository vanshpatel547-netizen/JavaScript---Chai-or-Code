function calculateCartPrice(val1 , val2 ,...num1){     // Rest operator , here first and second values assign to val1 and val2 and rest all values are format inside Array 
return num1;    // it returns Array of this three values 
}

// Objects and Functions 

// console.log(calculateCartPrice(200,400,500,2000));  // how can we manage all values Restcomes Ex: ...num1

// const user = {
//   username : "vansh",
//   prices : 199,
// }

// function handleObjects(anyobject){
//     console.log(`Usename is : ${anyobject.username} and price is : ${anyobject.price}`);
// }

// // handleObjects(user) // pass user object inside it 
// handleObjects({
//   username : "vansh",
//   price : 399,
// }) // we can directly pass an object inside it 


// Functions with Array

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // we can also pass variable or 
console.log(returnSecondValue([200,400,300,100])); // we can also pass direct arrays 