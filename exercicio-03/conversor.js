// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
// milímetro (mm)
// centímetro (cm)
// decímetro (dm)
// decâmetro (dam)
// hectômetro (hm)
// quilômetro (km)
// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

const value = prompt("Digite um valor em metros: ")
const option = prompt("Escolha uma opção de conversão: \n1) milímetro (mm)\n2) centímetro (cm)\n3) decímetro (dm)\n4) decâmetro (dam)\n5) hectômetro (hm)\n6) quilômetro (km)")
let convert = ''
let unit = ''
let convertedValue = 0

switch(option){
    case '1':
        convertedValue = value * 1000
        convert = 'milímetros'
        unit = 'mm'
        break
    case '2':
        convertedValue = value * 100
        convert = 'centímetros'
        unit = 'cm'
        break
    case '3':
        convertedValue = value * 10
        convert = 'decímetros'
        unit = 'dm'
        break
    case '4':
        convertedValue = value / 10
        convert = 'decâmetros'
        unit = 'dam'
        break
    case '5':
        convertedValue = value / 100
        convert = 'hectômetros'
        unit = 'hm'
        break
    case '6':
        convertedValue = value / 1000
        convert = 'quilômetros'
        unit = 'km'
        break
    default: 
        alert('Opção inválida')
}

alert('Valor inserido: '+ value +'m\nOpção escolhida: '+ convert +'\nValor convertido: '+ convertedValue + unit)
