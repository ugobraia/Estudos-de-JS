// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const car1 = window.prompt('Digite o nome do primeiro carro:')
const speed1 = window.prompt('Digite a velocidade do primeiro carro:')
const car2 = window.prompt('Digite o nome do segundo carro:')
const speed2 = window.prompt('Digite a velocidade do segundo carro:')

if (speed1 > speed2){
    alert('O carro ' + car1 + ' é mais rápido que o carro ' + car2)
} else if (speed1 < speed2){
    alert('O carro ' + car2 + ' é mais rápido que o carro ' + car1)
} else {
    alert('Os carros ' + car1 + ' e ' + car2 + ' têm a mesma velocidade')
}