const titres = document.querySelectorAll("h1");
console.log(titres);
/* Fonction pour scroller */
function goToTitre(titre) {
    const distance = titre.offsetTop; //distance en pixel jusqu'a l'element searched(titre)
    console.log(titre.offsetTop);
    
    window.scrollTo(0, distance); //scroller verticalement jusqu'a l'elt titre
}
goToTitre(titres[5]); // aller a Titres 05 {lanncer cette ligne dans la console Js afin de voir cela}

