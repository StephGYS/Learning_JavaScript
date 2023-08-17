const input = document.querySelector("input");

input.addEventListener("focus", function() {
    input.style.background = "#C0FFEE";
}); //Cocher dans la case sur le website

input.addEventListener("blur", function() {
    input.style.background = "white";
});