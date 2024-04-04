let fila = ['Matheus', 'Marcos']
let escolha = 0

function formataFila(fila){
    let filaFormatada = ''

    if(fila.length == 0){
        return 'Vazia\n'
    } else {
        for(let i = 0; i < fila.length; i++){
            filaFormatada += i + 1 +' - '+ fila[i] +'\n'
        }
        return filaFormatada
    }
}

alert('Bem vindo à fila.')
do{
    escolha = parseInt(prompt('Fila de espera atual:\n'+ formataFila(fila) +'\n1) Novo paciente\n2) Consultar paciente\n3) Sair'))
    switch(escolha){
        case 1:
            let nome = prompt('Digite o nome do paciente a entrar na fila:')
            fila.push(nome)
            alert('Paciente '+ nome +' entrou na fila.')
            break
        case 2:
            if(fila.length == 0){
                alert('Não há pacientes na fila para serem atendidos.')
                break
            } else {
                let paciente = fila.shift()
                alert('Paciente '+ paciente +' foi atendido.')
                break
            }
        case 3:
            alert('Fim do atendimento.')
            break
        default:
            prompt('Opção inválida. Por favor, tente novamente.')
            break
    }
} while(escolha != 3)