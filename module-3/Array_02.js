const marvel_heros = ["thor","Ironmen", "spiderman"];
const dc_heros = ["supermen","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // it create problems

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros); // it works perfect as we want to cancat

// const all_new_heros = [...marvel_heros , ...dc_heros];
// console.log(all_new_heros); // new functionality of ES6 features 

const anothere_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = anothere_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("vansh")); // it gives true or false it decides array or not simpely 
console.log(Array.from("vansh")); // it gives charactoer array when use from 
console.log(Array.from({name : "vansh"}));  // interesting for interview it gives empty array if object passed with key 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));



 






