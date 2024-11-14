// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrayMinValue = (nambers) => {
    let min = nambers[0];
    for (let i = 0; i < nambers.length; i++) {
        let number = nambers[i];
        if (number < min) {
            min = number;
        }

    }
    return min;
}
console.log(arrayMinValue([22, 333, -44, 55, -66]));