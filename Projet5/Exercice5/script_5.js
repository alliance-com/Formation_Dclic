document.addEventListener("DOMContentLoaded", function() {
    let tableau = [10, 5, 8, 20, 15];
    let display = document.getElementById("arrayDisplay");

    function afficherTableau() {
        display.innerText = "Tableau : " + tableau.join(", ");
    }

    afficherTableau();

    // Ajouter un élément
    document.getElementById("addBtn").addEventListener("click", function() {
        let valeur = document.getElementById("newElement").value;
        if (valeur === "") {
            alert("Veuillez entrer un nombre à ajouter.");
            return;
        }
        tableau.push(Number(valeur));
        afficherTableau();
        document.getElementById("newElement").value = "";
    });

    // Supprimer un élément spécifique
    document.getElementById("removeBtn").addEventListener("click", function() {
        let valeur = document.getElementById("removeElement").value;
        if (valeur === "") {
            alert("Veuillez entrer un nombre à supprimer.");
            return;
        }
        valeur = Number(valeur);
        let index = tableau.indexOf(valeur);
        if (index !== -1) {
            tableau.splice(index, 1);
            afficherTableau();
        } else {
            alert("Le nombre " + valeur + " n'est pas dans le tableau.");
        }
        document.getElementById("removeElement").value = "";
    });

    // Trier le tableau
    document.getElementById("sortBtn").addEventListener("click", function() {
        tableau.sort((a, b) => a - b);
        afficherTableau();
    });
});