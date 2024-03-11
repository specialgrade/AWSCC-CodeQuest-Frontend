// TASK 1
const book = {
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    year: 1999,
}
console.log(book.author + '\n');

// TASK 2
const student = {
    name: 'Aly',
    age: 18,
    grade: 'First Year',
}

student.age = 19;
student.subjects = ['Computer Programming 1', 'Introduction to Computing', 'Computer Programming 2', 'Discrete Structure 1'];

console.log(student.age + '\n');
console.log(student.subjects);

// TASK 3
const rectangle = {
    width: 20,
    height: 25,
    calculateArea: function(width, height) {
        return width * height;
    }
}

const rectArea = rectangle.calculateArea(rectangle.width, rectangle.height);
console.log(rectArea);

// TASK 4
const person = {
    name: 'Aly',
    age: 18,
    address: 'San Mateo, Rizal',
}

delete person.address;
console.log(person.address);

const employee = {
    name: 'Aly',
    position: 'Junior Frontend Developer',
}

const employeeDetails = {
    person: person,
    employee: employee,
}

console.log(employeeDetails);