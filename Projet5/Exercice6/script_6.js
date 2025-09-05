document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculerBtn").addEventListener("click", function() {
        let montant = parseFloat(document.getElementById("montant").value);
        let tauxAnnuel = parseFloat(document.getElementById("taux").value);
        let duree = parseInt(document.getElementById("duree").value);

        // Vérification des valeurs
        if (isNaN(montant) || montant <= 0) {
            alert("Veuillez entrer un montant de prêt valide (supérieur à 0).");
            return;
        }
        if (isNaN(tauxAnnuel) || tauxAnnuel <= 0) {
            alert("Veuillez entrer un taux d'intérêt annuel valide (supérieur à 0).");
            return;
        }
        if (isNaN(duree) || duree <= 0) {
            alert("Veuillez entrer une durée valide (supérieure à 0).");
            return;
        }

        // Calcul du taux mensuel et du nombre total de paiements
        let r = (tauxAnnuel / 100) / 12;
        let n = duree * 12;

        // Formule de calcul
        let M = montant * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        document.getElementById("resultat").innerText = 
            "Paiement mensuel : " + M.toFixed(2) + " XOF";
    });
});