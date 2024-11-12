// - створити функцію яка повертає найменьше число з масиву

function arrayMinValue(nambers){
    let min = nambers[0];
    for (let i = 0; i < nambers.length; i++) {
        let number = nambers[i];
        if (number < min) {
            min = number;
        }
        
    }
    return min;
}
console.log(arrayMinValue([22, 333, -444, 55, -66]));