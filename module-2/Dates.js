
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate); // object

// let myCreateDate = new Date(2023,0,23,5,3);
let myCreateDate = new Date("2023-01-14");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime()); // it both gives time in miliseconds 
// console.log(Math.floor(Date.now()/1000)); // you can do this to convert into seconds 

let newDate = new Date("2023-04-13");
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
  weekday : "long",
})

// <------------------------ END OF MODULE 2 ---------------------->



