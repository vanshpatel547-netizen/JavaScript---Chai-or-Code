// now how can we iterate objects ?

const myObj  = {
  js : 'javascript',
  cpp : 'C++',
  rb : 'ruby',
  swift : 'swift by apple'
}

for (const key in myObj) {      // for in loop is comes for achive this , can it also apply for arrays now it's a question ?
  // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ['js','rb','py','java','cpp'];

for (const key in programming) {   // yes we can do this and this all are syntax to print array values 
  // console.log(programming[key]);
}


const map = new Map();

map.set('IN' , 'India')
map.set('USA' , 'United states of America')
map.set('Fr' , 'France')
map.set('IN' , 'India') 

for (const key in map) {
  // console.log(key);
  
}