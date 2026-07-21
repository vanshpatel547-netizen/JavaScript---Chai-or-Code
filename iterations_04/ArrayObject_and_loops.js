const coding = ['js', 'rb', 'java', 'py', 'cpp'];

// coding.forEach(item => {     // basic syntax to write foreach loop
//   console.log(item);
// });

// interesting 

function printMe(item) {     // here is one predefined function we can pass it as p parameter on foreach loop
  // console.log(item);
}

// coding.forEach(printMe); // here we can pass a refrence of the function , it also allowed 

coding.forEach((item, index, arr) => {     // sorry here is basically full syntax of foreach loop ! 😂
  // console.log(item , index , arr);
})

const myCoding = [        // this typr array objects is comman and repetatly use for iteration when we want to fatch values from databases we can basically use this foreach loop more and more because it's too simple !
  {
    languageName: 'javascript',
    languageFilename: 'js'
  },
  {
    languageName: 'java',
    languageFilename: 'java'
  },
  {
    languageName: 'python',
    languageFilename: 'py'
  }
];

myCoding.forEach(item => {
  console.log(item.languageName);    // access by dot(.) notation
})


