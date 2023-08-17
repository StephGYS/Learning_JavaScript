const texte = document.querySelector("textarea");
const txt = [];
const voyelles = ["a","e","i","o","u","y"];

texte.addEventListener("keypress", function(event) {
    const key = event.key;
    if (!voyelles.includes(key)/*Prendre les lettres comsonnes*/) { 
        txt.push(key);
    }
    console.log(txt.join("-")); //taper un mot dans la case sur le website
});