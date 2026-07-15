// array

const myarr = [0,1,2,3,4,5,true,'hitesh'];
const myheros = ['iron men', 'spiderman'];

const myarr2 = new Array(1,2,3,4,5);

// console.log(myarr[1]);

// array methods 

// myarr.push(6); // for add value at last
// myarr.push(7); // for add value at last
//                    myarr.pop(); // for remove last array value

myarr.unshift(9); // for add value at first
myarr.shift(9); // for removing value at first

// console.log(myarr.includes(9)); // for grab question answer from array true or false 
// console.log(myarr.indexOf('hitesh')); // if given element index exist it show index , if not it gives always -1 

// const newarr = myarr.join(); // for convert all array values into string 

// console.log(myarr);
// console.log(newarr);

// Slice , splice 

console.log("A",myarr);

const myn1 = myarr.slice(1,3) // it not includes last index element , it works with copy of array 


console.log(myn1);
console.log("B" , myarr);

const myn2 = myarr.splice(1,3); // it includes last index element , it works wuth original refrence ( heap memory ) , so original array will also change - important for interviews 
console.log("C" , myarr);
console.log(myn2);




