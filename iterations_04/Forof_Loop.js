// for of      // this all loops are specifically design for Arrays for batter use and consize looping 

// ["","",""]  // we do all of this , pass string amd objects inside looping 
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const val of arr) {    // here we put loop for arr 
  // console.log(val);
}

const greetings = "Hello word !"

for (const val of greetings) {       // here we cam also put the conditions like when space detected it contine or break the loop 
  // console.log(`Each char is ${val}`);
}

// Maps

const map = new Map();

map.set('IN' , 'India')
map.set('USA' , 'United states of America')
map.set('Fr' , 'France')
map.set('IN' , 'India')  // it cannot be duplicated , map is known as a unique key value pairs 


// console.log(map);

for (const [key , val] of map) {     // we can destructure for map key and value like this : [ key , value ]
//  console.log(key , ':-' , val);
}

// for objects 

const myObj = {
  game1 : 'NFS',
  game2 : 'Spiderman'
}

for (const [key , val] of myObj) {   // we can not iterate objects like this !
  console.log(key , ':-' , val);
}
