console.log("hello" + " word");

const name = "vansh";
const repocount = 50;

console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // backtiks for string interpolation

// methods of String

const gameName = new String('vansh-patel');
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 5); // if you put negative values it start from Zero default !
console.log(newString);

const anotherString = gameName.slice(-8, 5); // same method but we can put negative values inside it !

console.log(anotherString);

const newString1 = "    vansh    "; // sometimes spaces includes in register form or any user details then how we can ignore spaces ? - trim comes !
console.log(newString1)
console.log(newString1.trim());

const url = "https://vansh.com/vansh%20patel"; // looks not preety good !

console.log(url.replace('%20','_')); // replace comes and put what you wanted to by removing first value and add second value.

console.log(url.includes('vansh'));

const sName = "one-two-three-four"
console.log(gameName.split('-')); // it split string into array 
console.log(sName.split('-',2)); // it split string into array but at first 2 "-" symbols !
