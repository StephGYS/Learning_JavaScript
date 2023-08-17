const lien = document.querySelector("a");

//lien.addEventListener("click", function() {
//    console.log("clic clic"); //cliquer sur le lien en page Web pour voir le decompte en console Js.
//})

  //Delete le clic
function clic () {
    console.log("clic");
    lien.removeEventListener("clic", clic);
}
lien.addEventListener("clic",clic);

//recuperer un elt au clavier
addEventListener("keypress", function(event) {
   console.log(event);
}); //se mettre dans la page web et appuyer sur une touche
addEventListener("keypress", function(event) {
   console.log(event.key);
}); 

 // Afficher une image au click
addEventListener("click", function(event) {
        const image = document.createElement("img");         image.setAttribute("src","https://picsum.photos/100/100/");
        console.log(event.x, event.y); //position du clic a l'ecran.
        document.body.appendChild(image)
}); //se mettre dans la page web et cliquer

//Afficher une image centre la ou on click
/*addEventListener("click", function(event) {
        const image = document.createElement("img");         image.setAttribute("src","https://picsum.photos/100/100/");
        image.style.position = "absolute";
        image.style.top = event.y + "px";
        image.style.left = event.x + "px";
        document.body.appendChild(image)
});*/
