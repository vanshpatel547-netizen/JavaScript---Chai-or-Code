// singleton 
// Object.create()


// object litreals 

// intervieew question ask one time & Chai aur code fails in it 😎
const mysym = Symbol("key1"); // Define symbol 

const Jsuser = {
  name: "vansh",
  "full name": "vansh patel",
  [mysym]: "mykey1", // way to add symbol into objects & access by [] , if use without bracket it act like string   
  age: 20,
  location: "gujarat",
  email: "abc@gmail.com",
  isLoggedin: false,
  lastLogginDays: ["monday", "saturday"],
};

// two ways to access
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);

// it seems error not you can't access by dot operator (.)
// console.log(Jsuser.full name);

// console.log(Jsuser[mysym]);

// Jsuser.email = "chatgpt@gmail.com";
// console.log(Jsuser.email);
// Object.freeze(Jsuser); // it freeze and do not overwrite values of this perticular key 

// Jsuser.email = "microsofr@gamil.com";
// console.log(Jsuser.email);

Jsuser.greeting = function () {
  console.log(`Hello Namaste !`);
}
Jsuser.greetingTwo = function () {
  console.log(`Hello Namaste ! ${this.name}`); // we can write variables inside backticks like this -> `${variable_name}` , use this.{property} to access value of current object
}

console.log(Jsuser.greeting()); 
console.log(Jsuser.greetingTwo());  

// vabsh patel 


