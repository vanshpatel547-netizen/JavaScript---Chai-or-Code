// const tinderuser = new Object() // singleton object

const tinderuser = {}; // non singleton object 

tinderuser.id = "123ab"
tinderuser.name = "vansh"
tinderuser.isLoggedin = false ;

console.log(tinderuser);

const regular_user = {       // nesting of abjects is possible !
  email: "sub@gmail.com",
  fullname: {
    userfullname : {
      firstname : "vansh",
      lastname : "patel"
    }
  },
}

// console.log(regular_user.fullname.userfullname.firstname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj4 = {5: "a",6:"b"}

// const obj3 = {obj1,obj2}; // same problem as array then how to combine ?
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2,obj4); // we can achive it by assign method & it optional to add {} value as first , it works target and source like obj1 is target and we can merge obj2 into obj1 , when we use {} insted we create empty object first and then assign all object value into mew object its's a different for interviews .
// console.log(obj3);

// const obj3 = {...obj1 , ...obj2}; // in most cases it uses more compare to assign and well approach 😎
// console.log(obj3);

const users = [
  {
    id: 1,
    email : "v@gmail.com",
  },
  {
    id: 1,
    email : "v@gmail.com",
  },
  {
    id: 1,
    email : "v@gmail.com",
  },
]
users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser)); // make key array for perticular object
console.log(Object.values(tinderuser)); // make key values into array for perticular object  
console.log(Object.entries(tinderuser)); // inside one perent Array , it puts key and values pairs of object into Array for a perticular object 

console.log(tinderuser.hasOwnProperty('islogged')); // to debug that object has perticular key or not 