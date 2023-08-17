const titre = document.querySelector("h1");

const texte = setTimeout(function() {
    titre.textContent = "Le JavaScript s'apprend avec une patience.";
    titre.style.opacity = 1;
    document.body.style.background = "#FB1";
}, 5000) //5000: 5 secondes(tps d'attentes avt affichage)