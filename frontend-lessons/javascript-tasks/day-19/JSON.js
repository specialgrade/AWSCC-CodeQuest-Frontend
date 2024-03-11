// TASK 1
const product = {
    name: 'Cat Long Cushion Stuff Plush',
    price: 799,
    quantity: 10,
}

const productJSON = JSON.stringify(product);
console.log(productJSON + '\n');

// TASK 2
const bookJSON = `{"title":"Dekada '70", "author":"Lualhati Bautista", "publishedYear":1983}`;
const book = JSON.parse(bookJSON);

console.log(book);
console.log('\n');

// TASK 3
const girls = [
    {
        name: 'Blossom',
        age: 18,
        city: 'New York',
    }, 
    {
        name: 'Bubbles',
        age: 17,
        city: 'Denver',
    },
    {
        name: 'Buttercup',
        age: 16,
        city: 'Seattle',
    }
];

const girlsJSON = JSON.stringify(girls);
const girlsParsed = JSON.parse(girlsJSON);

girlsParsed.forEach(girls => {
    console.log(`Name: ${girls.name}\tCity: ${girls.city}`);
})