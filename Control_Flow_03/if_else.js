// if 

const isUserLoggedIn = true ;
const Temperature = 41

// if (Temperature > 50){          // if true then execute otherwise not !
// console.log("temprature less then 50");
// }else{
// console.log("temprature is more then 50");
// }

// console.log("I am Executed EveryTime");

// Comparision Operator : < , > , <= , >= , == , != , === (if you want to check with Datatype)
// Logical operator : && , || , << , >>

const Score = 200;

// if(Score > 100){
//   const Power = "fly"
//   console.log(`User Power : ${Power}`);
  
// }

//   console.log(`User Power : ${Power}`); // it gives error because of scope 

const balance = 1000;

// if(balance > 500) console.log("test");   // implisite scope we can not write multiple line if you want use , comma operator (unreadable code cannot do it)

// if(balance < 500){
// console.log("less then");
// }else if(balance < 750){
//   console.log("less then 750");
// }else if ( balance < 900){
//   console.log("less then 900");
// }else{
//   console.log("less then 1200");
// }



const userLoggedIn = true ;
const debitCard = true ;
const loggedInFromGoogle = false ;
const logedInFromEmail = true ;

if (userLoggedIn && debitCard) {     // agar dono permission to he age jayenge !
  console.log("allow to buy courses");
}

if (loggedInFromGoogle || logedInFromEmail) {
  console.log("user Logged In");
  
}