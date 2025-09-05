// --------- Exercices sur les boucles -

// Question 1: Afficher 1 à 10 avec for
function question1For() {
  let resultat = "";
  for (let i = 1; i <= 10; i++) {
    resultat += i + " ";
  }
  alert("Nombres de 1 à 10 : " + resultat);
}

// Question 2: Somme 1 à 100 avec while
function question2While() {
  let somme = 0;
  let i = 1;
  while (i <= 100) {
    somme += i;
    i++;
  }
  alert("La somme des entiers de 1 à 100 est : " + somme);
}

// Question 3 : Nombre secret avec do-while
function question3DoWhile() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let guess;
  do {
    guess = parseInt(prompt("Devinez le nombre secret (1-100) :"));
    if (guess > secret) {
      alert("Trop grand !");
    } else if (guess < secret) {
      alert("Trop petit !");
    }
  } while (guess !== secret);
  alert("Bravo 🎉 Vous avez trouvé le nombre secret : " + secret);
}

// Question 4: Séquence de Fibonacci
function question4Fibonacci() {
  let N = parseInt(prompt("Combien de termes de Fibonacci voulez-vous afficher ?"));
  let a = 0, b = 1;
  let resultat = "";
  for (let i = 1; i <= N; i++) {
    resultat += a + " ";
    let temp = a + b;
    a = b;
    b = temp;
  }
  alert("Séquence de Fibonacci : " + resultat);
}