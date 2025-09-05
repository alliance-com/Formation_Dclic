// Question 1: Un nombre premier entre 1 et 100----
function question1Premier() {
  let result = "Nombres premiers entre 1 et 100 : ";

  for (let n = 2; n <= 100; n++) {
    let estPremier = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        estPremier = false;
        break;
      }
    }
    if (estPremier) {
      result += n + " ";
    }
  }

  alert(result);
}

// Question 2: Facteur d'un nombre ----

function question2Facteurs() {
  let nombre = parseInt(prompt("Entrez un nombre :"));
  let result = "Facteurs de " + nombre + " : ";

  for (let i = 1; i <= nombre; i++) {
    if (nombre % i === 0) {
      result += i + " ";
    }
  }

  alert(result);
}

// Question 3: Moyenne de nombre positif ----
function question3Moyenne() {
  let somme = 0;
  let count = 0;
  let nombre;

  do {
    nombre = parseFloat(prompt("Entrez un nombre positif (ou négatif pour arrêter) :"));
    if (nombre >= 0) {
      somme += nombre;
      count++;
    }
  } while (nombre >= 0);

  if (count > 0) {
    let moyenne = somme / count;
    alert("La moyenne des nombres positifs est : " + moyenne);
  } else {
    alert("Aucun nombre positif saisi !");
  }
}

// Question 4: Motif triangulaire en étoile ----

function question4Triangle() {
  let hauteur = parseInt(prompt("Entrez la hauteur du triangle :"));
  let motif = "";

  for (let i = 1; i <= hauteur; i++) {
    // chaque ligne contient (2*i - 1) étoiles
    motif += "*".repeat(2 * i - 1) + "\n";
  }

  alert(motif);
}