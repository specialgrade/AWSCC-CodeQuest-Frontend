let temperature = 25;

if (temperature > 30) {
    console.log(`Phew! It\'s so hot today, the temperature is literally ${temperature} degrees celsius.\n`);
} else {
    console.log(`Achoo! I'm freezing, the temperature is so cold. It\'s ${temperature} degrees celsius outside.\n`)
}

let time = 18.00; // 24 hr time notation

if (time >= 0.00 && time < 11.59) {
    console.log('Good morning, user!\n');
} else if (time >= 12.00 && time < 17.59) {
    console.log('Good afternoon, user!\n');
} else if (time >= 18.00 && time < 23.59) {
    console.log('Good evening, user!\n');
} else {
    console.log('Input Out Of Range.\n');
}

let day = 'Saturday';

switch (day) {
    case 'Sunday':
        console.log('Lec: NSTP - CWTS 1\n');
        break;
    case 'Monday':
        console.log('No scheduled classes.\n');
        break;
    case 'Tuesday':
        console.log('Lec: Filipinolohiya and Accounting\n');
        break;
    case 'Wednesday':
        console.log('Lec: Introduction to Computing and PATHFIT 1\nLab: Computer Programming 1\n');
        break;
    case 'Thursday':
        console.log('No scheduled classes.\n');
        break;
    case 'Friday':
        console.log('Lec: MMW and Purposive Communication\n');
        break;
    case 'Saturday':
        console.log('Lec: Introduction to Computing\nLab: Computer Programming 1\n');
        break;
    default:
        console.log('Another day to build good habits.\n');
        break;
}