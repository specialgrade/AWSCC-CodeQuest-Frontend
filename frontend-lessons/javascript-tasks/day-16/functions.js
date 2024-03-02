function greet(name) {
    console.log(`Hello there, ${name}!`);
}

greet('Aly');

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(6, 9));

function calculateAverage(rawGrades) {
    let gradesSum = 0;
    for (let i = 0; i <= 4; i++) {
        gradesSum += rawGrades[i];
    }
    return gradesSum / rawGrades.length;
}

const rawGrades = [96, 99, 98, 94, 90];
const finalAverage = calculateAverage(rawGrades).toFixed(2);
console.log(`Final Average: ${finalAverage}`);
