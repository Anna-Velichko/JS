// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function roundSquare(radius) {
//     const result = 3.14 * radius * radius;
//     return result;
// }
// let s = roundSquare(2);
// console.log(s);

function roundSquare(radius) {
    return Math.PI * radius * radius;
}
console.log(roundSquare());