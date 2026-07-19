// Immediality Invoked Functions Expressions (IIFE)

// function chai(){
//   console.log("Db connected");
// }
// chai()

// (function chai(){
//   console.log("Db connected");
// })()         // this is actually a function call don't confuse like we call : chai() , same as that here (function)(call) nothing more complex chill 😂
// it introduce for globle scope polution you can call like that in interviews 

// you can also write like that 
// (()=>{
//   console.log("db connected ");
  
// })()


(function chai(){
  console.log("db connected ");
  
})();     // we can also terminate like this 

// (function aurcode(){                    // it's a named IIFE Ex: aurcode
//   console.log("db connected also ");
  
// })()

((name)=>{
  console.log(`db connected also ${name}`);
  
})("vansh")    // we can pass arguments for parameter like this 

// always remember for interviews when we write two IIFE put semicolon to avoid annessarry errors !

