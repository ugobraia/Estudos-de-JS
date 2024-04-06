// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

let opcao = 0
let imoveis = []

alert('Bem vindo ao sistema de cadastro de imóveis')
do{
    opcao = parseInt(prompt('Qtd. de móveis cadastrados: '+ imoveis.length +'\n\nEscolha a opção desejada:\n1) Salvar imóvel\n2) Mostrar imóveis salvos\n3) Sair'))
    switch(opcao){
        case 1:
            let imovel = {}
            imovel.nome = prompt('Digite o nome do proprietário:')
            imovel.quartos = parseInt(prompt('Digite a quantidade de quartos:'))
            imovel.banheiros = parseInt(prompt('Digite a quantidade de banheiros:'))
            imovel.garagem = prompt('Possui garagem? (s/n)').toUpperCase() == 'S' ? true : false

            const confirmacao = confirm('Salvar este imóvel (s/n)?\n\nProprietário: '+ imovel.nome +'\nQuartos: '+ imovel.quartos +'\nBanheiros: '+ imovel.banheiros +'\nGaragem: '+ (imovel.garagem ? 'Sim' : 'Não'))

            if(!confirmacao){
                alert('Imóvel não salvo.')
            } else {
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso!')
            }
            break

        case 2:
            let lista = ''
            
            if(imoveis.length){
                for(let i = 0; i < imoveis.length; i++){
                    lista += 'Imóvel #'+ parseInt(i + 1) +'\nProprietário: '+ imoveis[i].nome +'\nQuartos: '+ imoveis[i].quartos +'\nBanheiros: '+ imoveis[i].banheiros +'\nGaragem: '+ (imoveis[i].garagem ? 'Sim' : 'Não') +'\n\n'
                }
                alert(lista)
            } else {
                alert('Nenhum imóvel cadastrado.')
            }
            break

        case 3:
            alert('Finalizando sistema...')
            break
            
        default:
            alert('Opção inválida.')
            break
    }
} while(opcao != 3)