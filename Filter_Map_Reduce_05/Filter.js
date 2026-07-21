const coding = ['js', 'ruby' , 'java' , 'python' , 'cpp'];

// const values = coding.forEach((item)=>{    // yes we can store foreachloop values in variables 
//     // console.log(item);     
//     return item;         // we must need to manually return item but still it not works !🥲 
// })
// console.log(values);  // it returns undefined 

const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter((num)=> num > 4 )   // basic syntax of filter here each elements will chacked and we must put one condition to alter the specific array
// console.log(newNums);

let newNums = myNums.filter((num)=> {
  return num > 4;              // it gives empty array so it's a problem , so need to write return here 
})
// console.log(newNums);  // same output 


// let N = [...myNums];

// N.forEach((num)=>{      // Do same for foreachloop 
//   if (num > 4) {
//     N.push(num);
//   }
// })

// console.log(N);


const books = [         // here is the array object fetch from databases looks like this have !
  { title: 'Book One' , genre: 'Fiction' , publish: 1981 , edition: 2004 },
  { title: 'Book Two' , genre: 'non-Fiction' , publish: 1992 , edition: 2005 },
  { title: 'Book Three' , genre: 'Fiction' , publish: 1976 , edition: 2006 },
  { title: 'Book Four' , genre: 'non-Fiction' , publish: 1987 , edition: 2007 },
  { title: 'Book Five' , genre: 'science' , publish: 1990 , edition: 2008 },
  { title: 'Book Six' , genre: 'Fiction' , publish: 1956 , edition: 2009 },
  { title: 'Book Seven' , genre: 'history' , publish: 1978 , edition: 2003 },
  { title: 'Book Eight' , genre: 'science' , publish: 1905 , edition: 2006 },
  { title: 'Book Nine' , genre: 'history' , publish: 1965 , edition: 2007 }
]

let userBooks = books.filter((Bk) => Bk.genre === 'history')

userBooks = books.filter((bk)=>{
 return bk.publish >= 1970 && bk.genre === 'history'   // here we can put multiple condition to check all with && 
})

console.log(userBooks);
