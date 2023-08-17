const titre = document.querySelector("h1");

const cadre = document.querySelector("div");
const maxHeight = cadre.clientHeight; //hauteur interne
const maxWidth = cadre.clientWidth; //largeur interne

console.log(maxHeight, maxWidth);
console.log(titre);
console.log(cadre);

/* Deplacer un elt verticalement */
//Parametrage de base 
titre.style.position = "relative";
let topPos = 0;
let leftPos = 0;
let forceH = -5;
let forceW = -2;

function animation() {
    if (topPos == 0) { forceH *= -1 }
    else if (topPos == maxHeight) { forceH *= -1 }
    
    topPos += forceH;
    
    titre.style.top = topPos + "px";
    
    requestAnimationFrame(animation);//appel de la fcf de facon repetitive
}
requestAnimationFrame(animation); //appel de la fcf

/* Deplacer un elt horizentalement */
function animationH() {
    if (leftPos == 0) { forceW *= -1 }
    else if (leftPos == maxWidth) { forceW *= -1 }
    
    leftPos += forceW;
    
    titre.style.left = leftPos + "px";
    
    requestAnimationFrame(animationH);//appel de la fcf de facon repetitive
}
requestAnimationFrame(animationH); //appel de la fcf
