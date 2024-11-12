// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://th.bing.com/th/id/OIP.B7NeO2rPwvYNrpYVzjTwSwHaHa?rs=1&pid=ImgDetMain'
    },
];

// for (const product of products) {
//     const title = product.title;
//     const price = product.price;
//     const image = product.image;
//     document.write(`<div><h3>${title}. Price - ${price}</h3><img src="${image}" alt=""></div>`)
// }
for (const product of products) {
    document.write(`<div><h3>${product.title}. Price - ${product.price}</h3><img src="${product.image}" alt=""/></div>`)
}