const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); //Desactiver le chargement de la page
    console.log("OK");
    formulaire.reset(); //supprimer l'ecriture apres avoir submit
});