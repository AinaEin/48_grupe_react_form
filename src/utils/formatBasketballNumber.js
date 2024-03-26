export function formatBasketballNumber(number, minSize) {
  let numString = number + "";
  const paddingSize = minSize - numString.length;
  return numString.padStart(paddingSize >= 0 ? minSize : numString.length, "0");
}

console.log(formatBasketballNumber(10, 3)); 
console.log(formatBasketballNumber(100, 4)); 
console.log(formatBasketballNumber(1000, 5)); 
console.log(formatBasketballNumber(10000, 6));

// export function formatBasketballNumber(number) {
//   return (number < 10 ? "0" : "") + number;
// }