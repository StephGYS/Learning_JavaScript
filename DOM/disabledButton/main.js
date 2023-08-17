const texte = document.querySelector("textarea");
const button = document.querySelector("button");

texte.addEventListener("keyup", function() {
    button.disabled = texte.value.length > 20 ? true : false;
    /*Si le texte ecrit est superieur a 20 caracteres, cela desactive le bouton de "twitter" */
}); 