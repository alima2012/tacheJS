var langagesProg = 'C++; PHP; Ruby';
var langagesProgArray = langagesProg.split(';');
langagesProgArray.shift();
langagesProgArray.push('C#');

console.log(langagesProg);
console.log(langagesProgArray);
// while(true){
//         var promptText = prompt('Entrez un langage de programmation');
//         if(promptText != ''){
//             langagesProg.push(promptText);
//         }else{
//             break;
//         }
//     }
// console.log(langagesProg);
// var langagesProgText = langagesProg.join(', ');
// alert('vous avez entré les langages de programmation suivants: '+langagesProgText);
// for(var i = 0; i < langagesProg.length; i++){
//     console.log('Index => '+i+' | Valeur => '+langagesProg[i]);
// }
// chaine de caracteres
// var langagesProg = ['PHP', 'Ruby', 'Python']
// alert(langagesProg.join('+'));
// var promptText = prompt("entrez le nom d\'un langage de programmation");
// if(langagesProg.indexOf(promptText) != -1){
//     alert("ton langage existe");   
// }else{
//     alert("ton langage n\'existe pas");
// }
// var langagesProg = [];

// while(true){
//     var promptText = prompt('Entrez un langage de programmation');
//     if(promptText != ''){
//         langagesProg.push(promptText);
//     }else{
//         break;
//     }
// }
// console.log(langagesProg);