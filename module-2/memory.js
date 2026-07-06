// their are two types

// 1. Stack ( Primitive ) ( copy provided )
// 2. Heap ( Non Primitive ) ( original reference provided )


// Example of stack memory ( Primitive ) ( copy provided ) :

let myYoutubeName = 'Chai aur Code'; 
let anotherName = myYoutubeName;

anotherName = 'Code with Chai';
console.log(anotherName); // code with chai
console.log(myYoutubeName); // chai aur code



// Example of heap memory ( Non Primitive ) ( original reference provided ) :

let UserOne = {
  email: "user@google.com",
  upi: "user@upi"
}

let UserTwo = UserOne;
UserTwo.email = "user2@google.com";

console.log(UserOne.email); // user@google.com
console.log(UserTwo.email); // user2@google.com
