// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

let fromArray = (arrayOfPrimitives) => {
    document.write(`<ul>`)
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
fromArray([1, 22, 333, 4444, 'qwerty', 'asdfgh', true, false]);