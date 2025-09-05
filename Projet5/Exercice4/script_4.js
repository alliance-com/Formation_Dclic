function afficherHeure() {
    let maintenant = new Date();

    let heures = String(maintenant.getHours()).padStart(2, "0");
    let minutes = String(maintenant.getMinutes()).padStart(2, "0");
    let secondes = String(maintenant.getSeconds()).padStart(2, "0");

    let heureActuelle = `${heures}:${minutes}:${secondes}`;

    document.getElementById("clock").value = heureActuelle;

    // Actualiser toutes les 1 seconde
    setTimeout(afficherHeure, 1000);
}

// Lancer l’horloge dès le chargement
document.addEventListener("DOMContentLoaded", afficherHeure);