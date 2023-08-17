const titre = document.querySelector("h1");
let i = 3;

titre.addEventListener("click", function() {
    const compte = setInterval(function() {
    
    if (i > 0) {
        titre.textContent = i;
    }
    else {
        titre.textContent = "GO !";
        clearInterval(compte);
    }
    console.log(i);
    i--;
}, 1000);
}) // click sur le page du website
