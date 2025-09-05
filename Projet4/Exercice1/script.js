// Question 1 : Vérifier la majorité
function question1() {
  let age = prompt("Quel est votre âge ?");
  age = parseInt(age);

  if (age < 18) {
    alert("Vous êtes mineur.");
  } else {
    alert("Vous êtes majeur.");
  }
}

// Question 2 : Pair ou Impair
function question2() {
  let nombre = prompt("Entrez un nombre :");
  nombre = parseInt(nombre);

  if (nombre % 2 === 0) {
    alert("Le nombre " + nombre + " est pair.");
  } else {
    alert("Le nombre " + nombre + " est impair.");
  }
}

// Question 3 : Mois de l'année
function question3() {
  let mois = prompt("Entrez le numéro du mois (1-12) :");
  mois = parseInt(mois);

  switch (mois) {
    case 1: alert("Janvier"); break;
    case 2: alert("Février"); break;
    case 3: alert("Mars"); break;
    case 4: alert("Avril"); break;
    case 5: alert("Mai"); break;
    case 6: alert("Juin"); break;
    case 7: alert("Juillet"); break;
    case 8: alert("Août"); break;
    case 9: alert("Septembre"); break;
    case 10: alert("Octobre"); break;
    case 11: alert("Novembre"); break;
    case 12: alert("Décembre"); break;
    default: alert("Numéro de mois invalide !");
  }
}