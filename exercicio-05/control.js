// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

alert('Bem vindo ao programa de controle financeiro!')

let money = parseFloat(prompt('Digite a quantidade inicial de dinheiro disponível:'));

let option = 0;

option = parseInt(prompt('Valor atual: R$'+ money.toFixed(2) +'\nEscolha a opção desejada:\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair'));

while(option != 3){
    switch(option){
        case 1:
            let add = parseFloat(prompt('Insira a quantidade a ser adicionada:'));
            money += add;
            break;
        case 2:
            let remove = parseFloat(prompt('Insira a quantidade a ser removida:'));
            if (remove > money) {
                alert('Não é possível remover mais dinheiro do que o disponível.');
                break;
            } else {
                money -= remove;
            }
            break;
        case 3:
            alert('Saindo...');
            break;
        default:
            alert('Opção inválida');
            break;
    }
    option = parseInt(prompt('Valor atual: R$'+ money.toFixed(2) +'\nEscolha a opção desejada:\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair'));
}

alert('Obrigado por utilizar nosso programa de controle financeiro!');