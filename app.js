// console.log(random());

let entier = document.getElementById('entier');
let flottant = document.getElementById('flottant');
let nonNumerique = document.getElementById('non-numerique');
let varRandom = document.getElementById('random');
let trunc = document.getElementById('trunc');
let replace = document.getElementById('replace');

let operande = 10;

//1
entier.innerText = (Number.parseInt(entier.innerText) * operande).toString();

// 2
flottant.innerText = ((parseFloat(flottant.innerText) * operande) + parseInt(entier.innerText)).toString();
let resultPart2 = flottant + entier;
console.log(resultPart2);

//3
if (isNaN(parseInt(nonNumerique.innerText))) {
    nonNumerique.innerText = '0';
}

//4
varRandom.innerText = (Math.floor(Math.random())).toString();

//5
trunc.innerText = (Math.trunc(parseInt(trunc.innerText))).toString();

//6
replace.innerText = replace.innerText.replace('world', 'Lallier Lizoé')
