let x = 2;
let y = 3;
let z = 4;

let a = x + 1; //a stocke 2 + 1 = 3
let b = x + y; //b stocke 2 + 3 = 5
let c = x - y; //c stocke 2 - 3 = -1
let d = x * y; //d stocke 2 * 3 = 6
let e = x / y; //e stocke 2 / 3
let f = 5 % 3; //f stocke le reste de la division euclidienne de 5 par 3
let g = x ** 3; //g stocke 2^3 = 2 * 2 * 2 = 8
let l = 2 ** 3 ** 2;
document.write(l) // Calcule 3 ** 2 = 3 * 3 = 9 puis 2 ** 9 = 512
/*On affiche les résultats dans une boite d'alerte en utilisant l'opérateur
 *de concaténation "+". On retourne à la ligne dans l'affichage avec "\n"*/
alert('a contient : ' + a +
      '\nb contient : ' + b +
      '\nc contient : ' + c +
      '\nd contient : ' + d +
      '\ne contient : ' + e +
      '\nf contient : ' + f +
      '\ng contient : ' + g);