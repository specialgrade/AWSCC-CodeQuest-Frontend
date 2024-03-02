let temperature = 25;

if (temperature > 30) {
    console.log(`Phew! It\'s so hot today, the temperature is literally ${temperature} degrees celsius.`);
} else {
    console.log(`Achoo! I'm freezing, the temperature is so low. It\'s ${temperature} degrees celsius.`)
}

let time = 18.00;

if (time >= 0.00 && time < 11.59) {
    console.log('Good morning, user!');
} else if (time >= 12.00 && time < 17.59) {
    console.log('Good afternoon, user!');
} else if (time >= 18.00 && time < 23.59) {
    console.log('Good night, user!');
} else {
    console.log('Input Out Of Range.');
}