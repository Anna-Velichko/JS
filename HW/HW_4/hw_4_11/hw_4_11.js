// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

function sum(array){
    let basket = 0;
    for (const arrayElement of array) {
        basket = basket + arrayElement;
    }
    return basket;
}
console.log(sum([1, 2, 10]));