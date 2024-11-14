// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let addListItem = (text) => {
    document.write(
        `
        <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        </ul>
        `
    )
}
addListItem('AsDfgH');