const greetings = ["Hi", "Bonjour", "Ciao", "Hola", "Hallo", "こんにちは", "안녕하세요"];
let currentGreeting = 0;

function changeGreeting() {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greetings[currentGreeting];
    currentGreeting = (currentGreeting + 1) % greetings.length;
}

setInterval(changeGreeting, 3000); // Change chaque 3 secondes
