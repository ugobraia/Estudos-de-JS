alert('Procurando Palíndromos\n\nOlá, eu vou te ajudar a descobrir se uma palavra é um palíndromo ou não!');
let palavra = prompt('Insira uma palavra:').toLowerCase();
let palindromo = ''

for(let i = palavra.length - 1 ; i >= 0; i--){
    palindromo += palavra[i];
}

if (palavra === palindromo){
    alert('A palavra '+ palavra +' é um palíndromo!');
} else {
    alert('A palavra '+ palavra +' não é um palíndromo!\nAo contrário ela fica: '+ palindromo +'.');
}