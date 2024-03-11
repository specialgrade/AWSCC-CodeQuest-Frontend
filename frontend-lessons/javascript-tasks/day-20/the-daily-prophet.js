// TASK 1
const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs: ", paragraphs);

const infos = document.getElementsByClassName("info");
console.log("Info Elements: ", infos);

const headerElement = document.getElementById("header");
console.log("Header Element: ", headerElement);

const highlightElement = document.querySelector(".highlight");
console.log("Highlight Element: ", highlightElement);

// TASK 2
let secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.textContent ="This paragraph is now updated!";

let headerDiv = document.getElementById("header"); 
headerDiv.style.backgroundColor = "#168aad"; 

// TASK 3
let newHeading = document.createElement("h3"); 
newHeading.textContent = 'New Section';
document.body.appendChild(newHeading);

// TASK 4
let firstParagraph = document.getElementsByTagName("p")[0];  
firstParagraph.parentNode.removeChild(firstParagraph);  

// TASK 5
headerDiv = document.getElementById("header"); 
headerDiv.addEventListener('click', function() {
    console.log('Header clicked!');
})

// TASK 6
let colors = ['#d9ed92', '#b5e48c', '#99d98c', '#76c893', '#52b69a', '#34a0a4']; 

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = colors[i]; 
}
