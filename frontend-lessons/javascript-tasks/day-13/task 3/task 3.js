// TASK 3
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

console.log(isMorning && isRaining);  
console.log(isMorning || isRaining);  
console.log(!isMorning);  