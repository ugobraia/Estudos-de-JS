// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const touristName = prompt('Qual seu nome, turista?');
const cities = [];

let escolha = prompt('Você já visitou alguma cidade? (s/n)');

while(escolha == 's'){
    let city = prompt('Qual cidade você visitou?');
    cities.push(city);
    escolha = prompt('Você já visitou outra cidade? (s/n)');
}

alert(touristName + ' visitou ' + cities.length + ' cidades: \n' + cities.join(', ') +'.');
