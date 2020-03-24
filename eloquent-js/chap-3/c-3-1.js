let minNumber = (a, b) => {
  if (Math.min(a, b) == 0) 
    return a;
  else 
  return b;
}

console.log(minNumber(0, 10));
// → 0
console.log(minNumber(0, -10));
// → -10

// function min(a, b) {
//   if (a < b)
//     return a;
//   else
//     return b;
// }

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10