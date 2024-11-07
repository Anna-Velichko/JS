// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Atomic Habits',
    pageCount: 288,
    genre:'Personal development',
    authors: [{ name: 'James Clear', age: 38 }]
}
console.log(book1);


let book2 = {
    title: 'Dandelion Wine',
    pageCount: 240,
    genre:'Coming-of-age',
    authors: [{ name: 'Ray Bradbury', age: 92 }]
}
console.log(book2);

let book3 = {
    title: 'The Picture of Dorian Gray',
    pageCount: 254,
    genre:'Philosophical fiction',
    authors: [{ name: 'Oscar Wilde', age: 46 }]
}
console.log(book3);
