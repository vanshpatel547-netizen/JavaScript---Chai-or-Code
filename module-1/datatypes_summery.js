// 1. Primitive Datatype :

// 7 types 
// - String
// - Number
// - Boolean
// - null
// - undefined
// - Symbol
// - BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp= null;

let userEmail = undefined; // or let userEmail;  ( both are same )

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 6712715615271218218721721n;


// 2. non Primitive ( refrence type ) Datatype :

// Array , Objects , Functions  


const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
    name: 'shaktiman',
    age: 30,
};

const myFunction = function (){
console.log('hello world');
}

myFunction(); // hello world

console.log(typeof heros); // object
console.log(typeof myFunction); // function object
console.log(typeof id); // symbol
