const user = {
  username : "vansh",
  price : 999,

  welcomemessage : function(){
    console.log(`${this.username} Welcome to website`);   // you can use this for access current context variables 
    console.log(this);
    
  }

}

// user.welcomemessage()
// user.username = "sam"; // noe we change context 
// user.welcomemessage()

// console.log(this);    // globle node context is a empty object 


// function chai(){
//   let username = "vansh"
//   console.log(this.username);   // we cannot use this for functions , only it use for objects 
// }

// chai()


// const chai = function (){      // it also same as before we do 
//   let username = "vansh"
//   console.log(this.username);
// }

// chai()   

const chai = () => {          // this is Arrow function  
  let username = "vansh"
  console.log(this);
}

chai()    

// ----------------------- talk for Arrow now ------------------

// const addTwo = (num1 , num2) => {      // basic syntax to define Arrow function 
// return num1 + num2;
// }

// const addTwo = (num1 , num2) =>  num1 + num2     // no need to write return and not need {} braces for oneline 
// const addTwo = (num1 , num2) =>  (num1 + num2)     //  you can also write like that if you use { } , then you need to write return , if you use () you don't need to write return , it also useful in react  
const addTwo = (num1 , num2) =>  ({username : "vansh"})    // you cannot return object inside {} , but you can return like this ({})
console.log(addTwo(3,4));

// we can simpley use it like that you must know know how to implement it for all methods 
const myArray = [2,4,6,8,9];
myArray.forEach(()=>{})
