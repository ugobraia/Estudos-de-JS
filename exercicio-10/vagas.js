const vagas = []

function excluirVaga(i){
    confirmar = confirm(visualizarVaga(i) +'\n\nVocê deseja excluir esta vaga?')
    if(confirmar){
        vagas.splice(i - 1, 1)
        alert('Vaga excluída com sucesso')
    } else {
        alert('Exclusão de vaga cancelada.')
    }
}

function inscreverCandidato(){
    let i = parseInt(prompt('Insira o índice da vaga desejada a se candidatar:'))
    if(vagas[i - 1]){
        let nome = prompt('Insira seu nome:')
        const confirmar = confirm(visualizarVaga(i) +'\n\nDeseja se candidatar a esta vaga?')
        if(confirmar){
            vagas[i - 1].candidatos.push(nome)
            alert('Candidatado com sucesso.')
        } else {
            alert('Candidatura cancelada.')
        }
    } else {
        alert('Índice inexistente.')
    }
}

function visualizarVaga (i){
    if(vagas[i - 1]){
        return 'Vaga #'+ vagas[i - 1].indice +'\nNome: '+ vagas[i - 1].nome +'\nDescricao: '+ vagas[i - 1].desc +'\nData limite: '+ vagas[i - 1].data +'\nQtd. de candidatos: '+ vagas[i - 1].candidatos.length +'\nNome dos candidatos: '+ vagas[i - 1].candidatos
    } else {
        return 'Índice inexistente.'
    }
}

function listarVagas(){
    let texto = ''
    for(let i = 0; i < vagas.length; i++){
        texto += 'Vaga #'+ vagas[i].indice +'\nNome: '+ vagas[i].nome +'\nQtd. de candidatos: '+ vagas[i].candidatos.length +'\n\n'
    }
    alert('Número de vagas cadastradas: '+ vagas.length +'\n\n'+ texto)
}

function criarNovaVaga(){
    const vaga = {}
    vaga.nome = prompt('Insira o nome da vaga:')
    vaga.desc = prompt('Insira a descrição da vaga:')
    vaga.data = prompt('Insira a data limite da vaga:')
    const confirmar = confirm(
        'Nome: '+ vaga.nome +
        '\nDescrição: '+ vaga.desc +
        '\nData: '+ vaga.data +
        '\n\nConfirmar criação da vaga?')
    if(confirmar){
        vaga.indice = (vagas.length + 1)
        vaga.candidatos = []
        vagas.push(vaga)
        alert('Vaga criada com sucesso.')
    } else {
        alert('Vaga descartada.')
    }
}

function menu(){
    let opcao = 0
    let i = 0
    do {
        opcao = parseInt(prompt('VAGAS DE EMPREGO\n\nEscolha a opção desejada:' + 
        '\n1) Listar Vagas disponíveis' +
        '\n2) Criar uma nova vaga' +
        '\n3) Visualizar uma vaga' +
        '\n4) Inscrever um candidato em uma vaga' +
        '\n5) Excluir uma vaga' +
        '\n6) Sair'))

        switch(opcao){
            case 1:
                listarVagas()
                break
            case 2:
                criarNovaVaga()
                break
            case 3:
                i = prompt('Insira o índice da vaga desejada:')
                alert(visualizarVaga(i))
                break
            case 4:
                inscreverCandidato()
                break
            case 5:
                i = prompt('Insira o índice da vaga a ser excluída:')
                excluirVaga(i)
                break
            case 6:
                alert('Obrigado por utilizar nosso sistema.\n\nFinalizando...')
                break
            default:
                break
        }
    } while(opcao != 6)
}

menu()

