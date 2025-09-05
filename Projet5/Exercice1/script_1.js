// Récupérer les éléments
const inputField = document.getElementById("userInput");
const lengthResult = document.getElementById("lengthResult");
const substringResult = document.getElementById("substringResult");

// Événement quand l'utilisateur tape
inputField.addEventListener("input", function () {
  const text = inputField.value;

  // Calculer la longueur
  lengthResult.textContent = "Longueur : " + text.length;

  // Extraire les 3 premiers caractères
  const substring = text.substring(0, 3);
  substringResult.textContent = "Sous-chaîne (3 premiers caractères) : " + substring;
});