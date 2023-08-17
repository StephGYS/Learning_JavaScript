// Code JavaScript
var num = 1;
var chiffre;
var motDePasse = 1234;

console.log(num);
console.log(chiffre);
console.log(chiffre+num);
console.log(11.25 * 2365365);
console.log(10 % 3); //reste de division


//Incrementation
var n = 0;
n+= 1;
n++;
console.log(n);

//Decrementation
var n = 2;
n-= 1;
n--;
console.log(n)

//string
var text = "Coucou";
var otherText = 'Hello, j\'appelle: \n Steph\tGys.';
console.log(text);
console.log(otherText);
console.log(text + " "+ otherText);

var bonjour = "Bjr";
var nom = "Steph";
bonjour+= "\t"+ nom;
console.log(bonjour);

var name = "Ella";
var age = 25;
var resultat= bonjour + ",\t"+ name +" a " +age + " ans !";
console.log(resultat);
console.log(resultat.length);
console.log(resultat[6]);
console.log(resultat[resultat.length - 1]);

//Object
var nom = "Anthony";
var age = 25;

var array = [-4, "Hi",age,"bye"];
var stats = ['attack', 'defence', array];

console.log(array);
console.log(stats);
console.log(stats[1]);
console.log(stats[2][0]);
console.log(stats[2][3]);

array[0]="52"; 
console.log(array);

console.log(stats.length);
console.log(stats[2].length);
console.log(stats[2][0].length);

var arr = [1, 2, 3];

arr.push("hi Gys"); //ajouter un elt dans un array
console.log(arr);

var rr = [1, 2, 3];
var pop = rr.pop();
console.log(rr);
console.log(pop);  //supprime l'elt dernier

var rrr = [2, 3, 4];
rrr.shift();
console.log(rrr); //supprime l'elt premier

//Exercice
var prenom = "Yann";
var nom = "Gys";
var result = [prenom, nom];
result.push(prenom[0]+nom[0]);
console.log(result);

//Fonctions
  //decouverte
function maFonction(num) {
    console.log(2 + num);
}
maFonction(5); //appel de maFonction

function minus(a,b) {
    console.log(a - b);
}
minus(5,14); //appel de minus

function minuss(a,b) {
   return a - b; 
}
var R = minuss(14,5);
console.log(R);

//Exo
var note1 = 17;
var note2 = 14;
var moyenne = moy(note1,note2) ;

function moy(a,b) {
    return (a+b) / 2;
}
console.log(moyenne);
/* Autre style de commentaire */

//Boolean
// vrai = true || faux = false
console.log(2 == 2);
console.log('true' != 'false');

//Condition Ternaire
var age = 19;
var majeur = 18;
console.log(age >= majeur ? "Ok let's go" : " go out there");

console.log(1 == 1 && 1 == 2);
console.log(1 == 1 || 1 <= 2);
console.log(age > majeur || age == majeur  ? "Ok let's go" : " go out there")

//mode strict
console.log(1 === "1");
console.log(1 !== "a" );

//condition if/else
function esTuFort(force) {
    if (force >= 15) {
        return "Tu es tres fort";
    }
    else if (force >= 10) {
        return "Tu est fort";
    }
    return "Non";
}

console.log(esTuFort(15));
console.log(esTuFort(12));
console.log(esTuFort(5));

//Exo
function niveau(r) {
    var moyy= (r[0] + r[1] + r[2]) / r.length;
    if (moyy > 15){
        return "Very Good !" +" "+ moyy;
    }
    else if (moyy > 10){
        return "Good !" +" "+ moyy;
    }
    return "Bad, call the parents" +" "+ moyy;
}
console.log(niveau([12, 8, 5]));

//Les objets
var chevalier = {
    "force": 15,
    "vitesse": 5,
    "faiblesse":["mage", "ninja"],
    "compagnon": {
        "animal": "chien",
        "aide": "ecuyer"
    }
};
console.log(chevalier);
console.log(chevalier.force); //recherche de la valeur de force
var requete = "vitesse";//other way to search the value of "vitesse"
console.log(chevalier[requete]);
console.log(chevalier.faiblesse[1]);

chevalier.force = 25; //modifier force dans chevalier.
console.log(chevalier);

chevalier.arme = "epee"; //Ajouter epee dans chevalier
console.log(chevalier);

delete chevalier.arme //supprimer delete
console.log(chevalier);

console.log(chevalier.hasOwnProperty("force")); //verify if there is 'force' in chevalier.

console.log(chevalier.compagnon.aide);

var recettes = {
    "recette1": {
        "ingredients": [],
        "nom": "lasagne",
        "cuisson": 15
    },
    "recette2": {
        "ingredients": [],
        "nom": "sandwich",
        "cuisson": 10
    }
}

console.log(recettes);
console.log(recettes.recette1);

//Boucle while
/*var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}*/

/*
var i = 0;
var triangle = [];
while (i < 10) {
    i++;
    triangle.push("#");
    console.log(triangle);
}*/

//Boucle for
/*var Triangle = [];
for (var i = 10; i >= 0 ; i- = 2) {
    Triangle.push("#");
    console.log(Triangle);
} */

var arr = [10, 5, 15, 7];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);

//exo
function moyennet(vect) {
    var total = 0;
    for ( var i = 0; i < vect.length; i++) {
        total += vect[i];
    }
    return total / vect.length;   
}
console.log(moyennet([15, 7, 8, 14]));

//boucle dans boucle
function plusUn(ar) {
    for(var i = 0; i < ar.length; i++){
        for(var j = 0; j < ar[i].length; j++) {
            ar[i][j] += 1;
        }
    }
    return ar;
}
console.log(plusUn([[1,2],[3,4],[5,6]]));

//generer nombre aleatoire
var random = Math.random(); //renvoi un chiffre entre 0 et 1
console.log(random);

var random = Math.random() * 5;  //renvoi un chiffre entre 0 et 5
console.log(random);

var random = Math.floor(Math.random() * 6);  //renvoi un entier entre 0 et 6
console.log(random);

var random = Math.floor(Math.random() * 6 + 1);  //renvoi un entier entre 1 et 5
console.log(random);

// generer un nombre aleatoire entre min et max quelconque
function rangRandom(min, max) { 
    var rang = Math.floor(Math.random() * (max - min + 1) + min);
    return rang;
}
console.log(rangRandom(5,11));

//Exo Melanger un array
function randomize(arr) {
    var temp = 0;
    var random = 0;
    
    for (var i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * arr.length);
        temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr;
}
console.log(randomize([1,2,3,4,5]));

//Methode Map(applique la boucle for directement)
var arr = [1, 2, 3, 4, 5];

var arrPlusUn = arr.map(function(nombre) {
    return nombre + 1;
})
console.log(arrPlusUn)

