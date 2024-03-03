// TASK 1
const cities = ['Manila', 'Makati', 'Cebu', 'Baguio', 'Iloilo' ];
console.log(cities[2]);

cities[1] = 'Taguig';
console.log(cities[1] + '\n');

// TASK 2
const fruits = ['apple', 'banana', 'orange', 'watermelon', 'mango'];
fruits.push('peach');
fruits.pop();

for (let i = 0; i <= 4; i++) { 
    console.log(fruits[i]);
}
console.log('\n');

// TASK 3
const numbers = [1, 2, 3, 4, 5];

const prod = numbers.map(numbers => numbers * 2);
console.log(prod);

const greaterThanFive = prod.filter(prod => {
    if (prod > 5) {
        return prod;
    }
})
console.log(greaterThanFive);

// TASK 4
const colors = ['pink', 'purple', 'yellow', 'green', 'blue', 'peach'];

colors.unshift('white');
colors.shift();
console.log(colors); // to show if there are changes

const secThird = colors.slice(1, 3);
console.log(secThird);

// TASK 5
let characters = ['daisy', 'rose', 'tulip', 'peony', 'lily', 'dahlia'];

characters.splice(2, 0, 'iris', 'marigold');
characters.splice(4, 3);
console.log(characters);