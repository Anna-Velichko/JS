// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

function fromArray(users) {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
fromArray([
    {id:1, name:'Tom', age:89},
    {id:2, name:'Jerry', age:88}
]);