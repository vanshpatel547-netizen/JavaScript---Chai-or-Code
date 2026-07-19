const userEmail = []

if (userEmail) {
  console.log("Got User Email");
}else{
  console.log("Don't Receive user Email");  
}

// falsy values 

// --> false , 0 , -0 , BigInt 0n , "" , null , undefined , NAN 


// truthy values 

// --> "0" , "false" , " " , [] , {} , function(){} 

// How to check Array are empty or not ! 😵‍💫

if (userEmail.length === 0){
console.log("Array is Empty");
}

// How to check Object are empty or not ! 😵‍💫

const EmptyObj = {};

if (Object.keys(EmptyObj).length === 0) {     // it converts into array first 
  console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null , undefined 

let val1;
// val1 = 5 ?? 10; // sometimes we connect with databases it delays for sometimes so it passes null or undefined values so we basically avoid to disturb code with this syntax or manage our code to do not disturb with that !
// val1 = null ?? 10  // so we handle as null first and then assign a function that fatch batabase value from database 

// val1 = undefined ?? 15   // it behave's like this if its undefined assign 15 or anything function()

val1 = null ?? 10 ?? 20 ; // if here is three null colisions then it simpley assigns second to handle first 

console.log(val1);

// ternory operator and null collision operator is totaly difrrent things 

// condition ? true : false ;   // basic syntax

const iceTeaPrice = 100 ;

iceTeaPrice <= 80 ? console.log("less then 80"): console.log("more then 80");

