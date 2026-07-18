// let a = 10;         // we can define all this type and assign values 
// const b = 20;
// var c = 30;
// var c = 300;    // so many problems with var as scope problems so do not use var 
let a = 300;       // here let comes this value is totaly independent from if block 
// problems with curly braces 

if (true) {
  let a = 10;       // now it is block scope not accesssible outside because of let    
  const b = 20;
  console.log(a);
  
}


for (let i = 0; i < array.length; i++) {      // so its very important that this i values is only for this block no access by outside 
  const element = array[i];
}



console.log(a); // we can use easily withb this logs 
// console.log(b);
// console.log(c);
