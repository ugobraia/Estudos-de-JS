let escolha = 0
let baralho = []

alert('Pilha de Cartas')
do{
    escolha = parseInt(prompt('Baralho atual: '+ baralho.length +' cartas.\n\n1) Adicionar uma carta\n2) Puxar uma carta\n3) Sair'))
    switch(escolha){
        case 1:
            let carta = prompt('Digite o nome da carta a ser adicionada:')
            baralho.unshift(carta)
            alert('Carta "'+ carta +'" adicionada ao topo do baralho.')
            break
        case 2:
            if(baralho.length == 0){
                alert('O baralho está vazio.')
                break
            } else {
                let carta = baralho.shift()
                alert('Carta "'+ carta +'" puxada do topo do baralho.')
                break
            }
        case 3:
            alert('Fim do jogo.')
            break
        default:
            alert('Opção inválida. Por favor, tente novamente.')
            break
    }
} while(escolha != 3)

