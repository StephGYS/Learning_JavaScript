//Les problemes de VAR
var arme = "couteau";
console.log(arme);

var arme = "lance";
console.log(arme)

  //Let et Const
const nom = "Jon Snow";
console.log(nom);

let weapon = "epee";
if (weapon == "epee") {
    const force = 15;
    let weapon = "lance";
    console.log(weapon);
}
console.log(weapon);

/* ASTUCES: 
     1) const par defaut
     2) let si besoin de mise a jour
     3) plus jamais de var 
*/

//Les templates string ${}
const perso = {
    nom: "Jon Snow",
    force: 15,
    arme: "epee",
    /*vie: 4*/
};
//const texte = perso.nom + " a une force de "+ perso.force + " et une "+ perso.arme + ".";
const texte = `${perso.nom} a une force de ${perso.force} et une ${perso.arme}, sa vie est de ${perso.vie ? perso.vie : 8}`;
console.log(texte);

//les fonctions fleches
const arr = [1, 2, 3, 4, 5];

//const arrPlusUn = arr.map(function(nombre) {
//    return `${nombre} + 1 = ${nombre + 1}`;
//});

//const arrPlusUn = arr.map((nombre) => {
//    return `${nombre} + 1 = ${nombre + 1}`;
//});

//const arrPlusUn = arr.map(nombre => {
//    return `${nombre} + 1 = ${nombre + 1}`;
//});

//const arrPlusUn = arr.map(nombre => `${nombre} + 1 = ${nombre + 1}`);

const arrPlusUn = arr.map(() => `5`);

console.log(arrPlusUn);
  //autre exemple
const maFonction = () => console.log("coucou");
maFonction();

//parametres par defaut d'une fonction
function disMonNom(nom= "No Name") {
    console.log(nom);
}
disMonNom("Steph");
disMonNom();

//Destructuring avec un object
const joueur = {
    noms: "Jon",
    type: "Chevalier",
    armes: "Epee"
}
//const {noms, type, armes} = joueur; // lier les elts de l'objet
const {noms, type: genre, armes = "Lance"} = joueur;
//console.log(noms, type, armes);
console.log(noms, genre, armes);

//Destructuring avec un array
const stats = [154, 12, 78, 28];

const [attaque, defense, vitesse, magie] = stats;

console.log(attaque, defense, vitesse, magie);

//Destructuring Intervertir des valeurs
let maCarte = "Dracaufeu";
let taCarte = "Ratatta";

[maCarte, taCarte] = [taCarte, maCarte];
console.log(maCarte, taCarte);

//Modifier Exo Melanger un array en ES6
function randomize(arr) {
  //var temp = 0;
  //var random = 0;
  
  for (let i = 0; i < arr.length; i++) {
      const random = Math.floor(Math.random() * arr.length);
      //temp = arr[i];
      //arr[i] = arr[random];
      //arr[random] = temp;
      [arr[i], arr[random]]=[arr[random], arr[i]];
  }
  return arr;
}
console.log(randomize([1,2,3,4,5]));

//Le spread Operator
const listeAmis = ["cyril", "gael", 'florian'];
const listeFamille = ["Jean-Claude", "anne-sophie", "charles"]

console.log([...listeAmis]); //lister tous les elts de listeAmis
const liste = [...listeAmis, "banjo", ...listeFamille];
console.log(liste);

const copieListe = [...liste];
copieListe.push("kawa");
console.log(copieListe);

//Destructuring avec  spread Operator
const list = ["cyril", "gael", "banjo", "kawa", "ekait"]; 
const [ami1, ami2, ...chiens] = list ;
console.log(ami1); 
console.log(chiens);

//Exo 
function plusUn(...args) {
  //console.log(args);
  const arr = [...args];
  return arr.map(num => num + 1);
}

console.log(plusUn(1,2,3,4,5,6));

//Tout sur le ES7
console.log(2**3); //puissances

const array = ["a","b","c","d","e"];
console.log(array.includes("a"));  //recherche d'elt 'a' dans le vect
console.log(array.includes(1));  //recherche d'elt 1 dans le vect