// - описати масив, в якому буде зберігатись інформація про температуру вранці,
//     вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temp1 = [
    {morning: 2, afternoon: 10, evening: 5},
    {morning: 2, afternoon: 11, evening: 6},
    {morning: 1, afternoon: 9, evening: 4},
    {morning: 3, afternoon: 10, evening: 6},
    {morning: 1, afternoon: 10, evening: 4},
    {morning: 0, afternoon: 8, evening: 4},
    {morning: -2, afternoon: 6, evening: 1}
];
// console.log(temp1[6].morning);

let temp2 = {
    morning: [2, 2, 1, 3, 1, 0, -2],
    afternoon: [10, 11, 9, 10, 10, 8, 6],
    evening: [5, 6, 4, 6, 4, 4, 1]
}
// console.log(temp2.morning[5]);