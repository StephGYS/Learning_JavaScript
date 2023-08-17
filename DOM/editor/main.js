const texte = document.querySelector("textarea");
const render = document.querySelector("div");

texte.addEventListener("keyup", function() {
    localStorage.setItem("texte", texte.value); //stocker les donnees
    render.innerHTML = marked(texte.value);
});