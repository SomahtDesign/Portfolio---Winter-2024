// Gérer l'effet de défilement de l'en-tête
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Effet de changement de langue pour l'introduction
const greeting = document.getElementById("greeting");
const greetings = ["Hi", "Bonjour", "Ciao", "Hola"];
let index = 0;

setInterval(() => {
    greeting.textContent = greetings[index];
    index = (index + 1) % greetings.length;
}, 3000);
