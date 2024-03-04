// TASK 1
const product = {
    name: 'Cat Long Cushion Stuff Plush',
    price: 799,
    quantity: 10,
}

const productJSON = JSON.stringify(product);
console.log(productJSON);

// TASK 2
const bookJSON = '{"title": "Dekada '70", "author": "Lualhati Bautista", "publishedYear": 1983}';
const book = JSON.parse(bookJSON);
console.log(book);