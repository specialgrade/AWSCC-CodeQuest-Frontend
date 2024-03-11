for (let i = 1; i <= 5; i++) { 
    console.log(i);
}

let cookies = ['chocolate chip', 'oatmeal raisin', 'gingerbread'];

for (let i = 0; i <= 2; i++) {
    console.log(cookies[i]);
}

// eating simulation
let cookiesInJar = 3; 
let jarNotEmpty = true;

while (jarNotEmpty && cookiesInJar > 0) { 
    console.log('Nom nom nom...');
    cookiesInJar--;
}

if (cookiesInJar === 0) {
    console.log('Aww...There are no more cookies for me to eat.');
}