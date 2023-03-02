// let name1 = "Jhon";
// let name2 = "Alexis";

// let name1Length = name1.length;
// let name2Length = name2.length;

// if(name1Length > name2Length){
//     console.log(name1.split('').reverse().join(''));
// }
// else{
//     console.log(name2.split('').reverse().join(''));
// }

// let name1 = "Jhon";
// let name2 = "Alexis";

// function reverseName(name1, name2) {
//   let name1Length = name1.length;
//   let name2Length = name2.length;

//   if (name1Length > name2Length) {
//     return name1.split("").reverse().join("");
//   } else {
//     return name2.split("").reverse().join("");
//   }
// }
// let result = reverseName("jhon", "alexis");
// console.log(result);


// let str = "Alexis";

// let reversedString = '';

// for(let i = 0; i < str.length; i++){
//     const element = str[i];
//     console.log(element);
// }
// console.log("-------------------------");
// for(let i = str.length - 1; i >= 0; i--){
//     const element = str[i];
//     reversedString = reversedString + element;
// }
// console.log(reversedString);






let name1 = "Jhon";
let name2 = "Alexis";

function reverseName(name1, name2) {
    let name1Length = name1.length;
    let name2Length = name2.length;
    let reversedString = '';
  
    if (name1Length > name2Length) {
        largeName = name1;
    } else {
        largeName = name2;    
    }
    for(let i = largeName.length - 1; i >= 0; i--){
        const element = largeName[i];
        reversedString = reversedString + element;
    }
    return reversedString;
  }
  let result = reverseName("jhon", "alexis");
  console.log(result);
  