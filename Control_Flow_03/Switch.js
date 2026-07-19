// switch case 

// switch (key) {    // basic syntax !
//   case value:

//     break;

//   default:
//     break;
// }


const month = "MAR";    // prevent from if else nested problem !😣❤️
// here when you use switch when case is matched execution is still running till end of the case , suppose one value is matched at case 2 then case 4,5 are also executed but default is not just executed ( important for interviews 😍)

switch (month) {
  case "JAN":
    console.log("JAN");
    break;

  case "FAB":
    console.log("FAB");
    break;

  case "MAR":
    console.log("MAR");
    break;

  case "APR":
    console.log("APR");
    break;

  default:
    console.log("Invalid Value");
    break;
}

