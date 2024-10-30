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

// Fonction pour détecter l'orientation des images
function detectImageOrientation() {
    const images = document.querySelectorAll('.photo-item');

    images.forEach((img) => {
        const image = new Image();
        image.src = img.src;

        image.onload = () => {
            if (image.width > image.height) {
                img.classList.add('landscape'); // Ajouter la classe paysage
                img.classList.add('highlight'); // Vous pouvez changer cela selon votre logique
            } else {
                img.classList.add('portrait'); // Ajouter la classe portrait
                img.classList.remove('highlight'); // Assurez-vous que 'highlight' n'est pas appliqué
            }
        };
    });
}

// Appeler la fonction au chargement de la page
window.onload = detectImageOrientation;

