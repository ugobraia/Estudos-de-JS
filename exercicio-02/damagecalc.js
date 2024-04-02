// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// 1. Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// 2. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// 3. Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

const char1 = window.prompt('Digite o nome do primeiro personagem:')
const atk1 = window.prompt('Digite o poder de ataque do primeiro personagem:')

const char2 = window.prompt('Digite o nome do segundo personagem:')
let hp2 = window.prompt('Digite a quantidade de pontos de vida do segundo personagem:')
const def2 = window.prompt('Digite o poder de defesa do segundo personagem:')
const shield2 = window.prompt('O segundo personagem possui um escudo? (s/n)')
let damage = 0

if (atk1 > def2 && shield2 === 'n'){
    damage = atk1 - def2
} else if (atk1 > def2 && shield2 === 's'){
    damage = (atk1 - def2) / 2
} else {
    damage = 0
}
hp2 -= damage

alert(char1 +' causou '+ damage +' de dano em '+ char2 +'.\n'+ char2 +' possui '+ hp2 +' pontos de vida.')