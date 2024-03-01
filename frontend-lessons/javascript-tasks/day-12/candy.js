const weightCandyA = 5;
const weightCandyB = 5;
const weightCandyC = 5;
const weightCandyD = 5;

let totalCost = (weightCandyA * 35.00) + (weightCandyB * 45.00) + (weightCandyC * 56.00) + (weightCandyD * 57.50);
let costFormat = totalCost.toFixed(2);

console.log(`The total cost of the bag of mixed candies is Php ${costFormat}.`);
