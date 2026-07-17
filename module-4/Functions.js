
// // defination of function 
// function sayMyName(){
// console.log("V");
// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");
// }

// // sayMyName // refrence of function 
// sayMyName() // function call 

// function addTwoNumbers(num1,num2){       // function perameters 
//    console.log(num1 + num2);
// }

// function addTwoNumbers(num1,num2){       // function perameters 
//    let result = num1 + num2 ;
//    return result ;
//    console.log("Not print because you put return first"); // it not prints after return statememt 
   
// }

// very simple way to do this 
// function addTwoNumbers(num1,num2){       // function perameters 
//   return num1 + num2 ; 
// }

// const result = addTwoNumbers(3,5) // function call arguments 
// console.log(result);

function loginUserMsg(username = "sam"){ // we can also define value that take when no argument passes EX:"sam"

  if(!username){
    console.log("please enter username");
    return
  }

  return `${username} just Looged in`

}

// console.log(loginUserMsg("vansh"));
console.log(loginUserMsg()); // when we put nothing in call it will show undefined 
