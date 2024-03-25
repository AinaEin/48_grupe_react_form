export function formatBasketballNumber(number) {
    return (number < 10 ? '0' : '') + number;
}


// function formatBasketballNumber(number, minSize) {
//    return number.toString.padStar(minSize,'0');
// }

// console.log(formatBasketballNumber(10, 3));
// console.log(formatBasketballNumber(100, 4));
// console.log(formatBasketballNumber(1000, 5));
// console.log(formatBasketballNumber(10000, 6));