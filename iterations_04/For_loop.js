// For

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);

}

// something hard you must need to know !

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value : ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    // console.log( i + '*' + j + '=' + i*j );    // print a table 
  }
}

// Array loops

let myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length);    //must need to know some developers confused length calculated start from 1 ,2 , 3   and array index is start from 0 , 1 , 2 ( that's why we cannot put the <= sign inside loop )

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}


// break and continue statement

// Break ----------------->

// for (let i = 1; i <= 20; i++) {
//   if(i == 5){            // we going out of loop when 5 detected in this loop
//     console.log(`Detected 5`);
//     break;
//   }
// console.log(`value of i is : ${i}`);
// }

// continue --------------->

for (let i = 1; i <= 20; i++) {
  if(i == 5){            // we are just skip or ignore that perticuler part of iteration here like when 5 detected we just skip it so it could not printed 
    console.log(`Detected 5`);
    continue;
  }
console.log(`value of i is : ${i}`);
}