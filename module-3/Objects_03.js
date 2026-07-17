// destructuring of objects 

const course = {
  coursename: "js in hindi",
  price : "999",
  courseTeacher: "vansh"
}

// course.courseTeacher 

const {courseTeacher : instructor} = course; // we can also use like this 
// console.log(courseTeacher);
console.log(instructor);

// API ?  Apna Kam Kisi Or Ke Sar Par Daal Dena 😂

// - first data will come through XMl format that is very cpmplex so then JSON comes it basically in object Format 

// Example of JSON Format 
// {
//   "name" : "vansh",
//   "coursename" : "js in hindi",
//   "price" : "free",
// }

// sometimes API Format is Array like this [{},{},{}]