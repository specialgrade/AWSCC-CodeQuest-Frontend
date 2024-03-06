// TASK 1
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

let infos = document.getElementsByClassName("info");
for (let i = 0; i < infos.length; i++) {
    console.log(infos[i]);
}

let header = document.getElementById("header");
console.log(header);

let highlight = document.querySelector(".highlight");
console.log(highlight);

// TASK 2
let secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.textContent ="This paragraph is now updated!";

let headerDiv; // will modify
headerDiv = document.getElementById("header"); 
console.log(headerDiv); 
headerDiv.style.backgroundColor = "#168aad"; 

// TASK 3
let newHeading = document.createElement("h3"); // will modify
newHeading.textContent = 'New Section';
document.body.appendChild(newHeading);

// TASK 4
let firstParagraph = document.getElementsByTagName("p")[0]; // will modify
firstParagraph.parentNode.removeChild(firstParagraph); 

// TASK 5
headerDiv = document.getElementById("header"); // will modify

headerDiv.addEventListener('click', function() {
    console.log("Header clicked!");
});

// TASK 6
let colors = ['#c4fff9', '#9ceaef', '#68d8d6', '#3dccc7']; // will modify
paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = colors[i % colors.length];
}