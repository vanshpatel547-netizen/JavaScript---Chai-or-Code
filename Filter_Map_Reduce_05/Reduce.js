const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc , curval) {   // basic syntax of reduce method 
//   console.log(`acc : ${acc} and curval : ${curval}`);
//   return acc + curval
// },0) // here you can initialize accumulator value ,( kaha se me start karu bhai 😂 )


const myTotal = myNums.reduce((acc ,curval)=>{
 return acc + curval;
},0)

console.log(myTotal);

const shoppingCart = [
  {
    itemname: 'js course',
    price: 999,
  },
  {
    itemname: 'py course',
    price: 300,
  },
  {
    itemname: 'mobile dev course',
    price: 1234,
  },
  {
    itemname: 'data science',
    price: 1500,
  }
]

const priceToPay = shoppingCart.reduce((acc ,item)=>{
return acc + item.price;
},0)

console.log(priceToPay);


// Now its a End of the Foundations 😍