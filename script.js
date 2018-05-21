//Fonction pour trouver le nombre max d'un array

function my_max() {
    var numbers = [1, 2, 3, 4];
    return Math.max(...numbers)
}

function vowel_count(str){

var m = str.match(/[aeiou]/gi);
return m === null ? 0 : m.length;
return vowelsCount;

}

function reverse(str) {
    return str.split("").reverse().join("");
    // Split retourne un array
    // Reverse créer un nouvel array avec les lettres inversées
    // Join permet de joindre les lettres de l'array
}

document.getElementById("vowel").innerHTML = vowel_count("coucou ahahah");
document.getElementById("array").innerHTML = my_max();
document.getElementById("reverse").innerHTML = reverse("hello le monde");

// FONCTION CALCULATRICE //
function event1(x){
    document.getElementById("text1").value+=x;
}
function event2(){
    var x = document.getElementById("text1").value;
    document.getElementById("text1").value = eval(x);
}