document.addEventListener("DOMContentLoaded", function() {
    // Extraction jour, mois, année
    document.getElementById("extractBtn").addEventListener("click", function() {
        let dateStr = document.getElementById("dateInput").value.trim();

        if (!/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
            alert("Veuillez entrer une date au format JJ-MM-AAAA.");
            return;
        }

        let parts = dateStr.split("-");
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10) - 1; // JS commence les mois à 0
        let year = parseInt(parts[2], 10);

        let dateObj = new Date(year, month, day);

        document.getElementById("dayResult").innerText = "Jour : " + dateObj.getDate();
        document.getElementById("monthResult").innerText = "Mois : " + (dateObj.getMonth() + 1);
        document.getElementById("yearResult").innerText = "Année : " + dateObj.getFullYear();
    });

    // Différence en jours
    document.getElementById("diffBtn").addEventListener("click", function() {
        let dateStr = document.getElementById("dateInput").value.trim();

        if (!/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
            alert("Veuillez entrer une date au format JJ-MM-AAAA.");
            return;
        }

        let parts = dateStr.split("-");
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10) - 1;
        let year = parseInt(parts[2], 10);

        let dateObj = new Date(year, month, day);
        let today = new Date();

        // Différence en millisecondes puis conversion en jours
        let diffTime = today - dateObj;
        let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById("diffResult").innerText = 
            "Différence avec aujourd'hui : " + diffDays + " jours";
    });
});