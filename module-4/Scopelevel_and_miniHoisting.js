// nested scope 

// function one(){
//   const username = "vansh"

//   function two(){
//       const website = "youtube" // we cannot access website variable outside its not a globle scope 
//       console.log(username);  // we can access username here because its globle for this function 
      
//   }
//   // console.log(website); // cannot access here 
//    two() // it prints vansh 
// }

// one()


// -------------------------------->

// if(true){
//   const username = "vansh";
//   if(username === "vansh"){
//     const website = "youtube"
//     console.log(username + website);
//   }
//   // console.log(website); // it cannot access as like in function 
// }
// console.log(username); // here also you cannot access as per function 


// <----------------- interesting------------->

addone(5); // we can use like this because it's not a variable 
function addone(num){
return num + 1;
}


addtwo(5);  // it's question for interview like we cannot access variable before initialization 
const addtwo = function(num){         // as yiou kbnow we can also define inside variable 
  return num + 2;
}

