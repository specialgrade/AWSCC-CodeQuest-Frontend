let isMorning = true;
let isRaining = false;

if (isMorning && isRaining) {
    console.log('Look if there\'s any class suspension.');
} else {
    console.log('No need to check for class suspension.');
}

if (isMorning || isRaining) {
    console.log('Bring an umbrella.\n');
} else {
    console.log('No need to bring an umbrella.\n');
} 

// to check their value
console.log(isMorning && isRaining); // prints false
console.log(isMorning || isRaining); // prints true
console.log(!isMorning); // prints false

