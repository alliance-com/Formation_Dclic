// Racine carrée
document.getElementById("racineBtn").addEventListener("click", function() {
    let nombre = parseFloat(document.getElementById("numberInput").value);
    if(!isNaN(nombre)) {
        document.getElementById("racineResult").innerText = "Racine carrée : " + Math.sqrt(nombre);
    } else {
        document.getElementById("racineResult").innerText = "Veuillez entrer un nombre valide.";
    }
});

// Arrondi
document.getElementById("arrondiBtn").addEventListener("click", function() {
    let nombre = parseFloat(document.getElementById("numberInput").value);
    if(!isNaN(nombre)) {
        document.getElementById("arrondiResult").innerText = "Arrondi : " + Math.round(nombre);
    } else {
        document.getElementById("arrondiResult").innerText = "Veuillez entrer un nombre valide.";
    }
});

// Nombre aléatoire 1-100
document.getElementById("randomBtn").addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomResult").innerText = "Nombre aléatoire : " + randomNum;
});

// Nombre aléatoire min-max
document.getElementById("random2Btn").addEventListener("click", function() {
    Aleatoire2(10, 50);
});

function Aleatoire2(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("random2Result").innerText = "Nombre aléatoire entre " + min + " et " + max + " : " + randomNum;
}