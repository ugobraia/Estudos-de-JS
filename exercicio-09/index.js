// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

let opcao = 0

function areaTriangulo(){
    let base = parseFloat(prompt('Digite a base do triângulo: '))
    let altura = parseFloat(prompt('Digite a altura do triângulo: '))
    alert(`A área do triângulo é: ${base * altura / 2}`)
}

function areaRetangulo(){
    let base = parseFloat(prompt('Digite a base do retângulo: '))
    let altura = parseFloat(prompt('Digite a altura do retângulo: '))
    alert(`A área do retângulo é: ${base * altura}`)
}

function areaQuadrado(){
    let lado = parseFloat(prompt('Digite o lado do quadrado: '))
    alert(`A área do quadrado é: ${lado ** 2}`)
}

function areaTrapezio(){
    let baseMaior = parseFloat(prompt('Digite a base maior do trapézio: '))
    let baseMenor = parseFloat(prompt('Digite a base menor do trapézio: '))
    let altura = parseFloat(prompt('Digite a altura do trapézio: '))
    alert(`A área do trapézio é: ${(baseMaior + baseMenor) * altura / 2}`)
}

function areaCirculo(){
    let raio = parseFloat(prompt('Digite o raio do círculo: '))
    alert(`A área do círculo é: ${3.14 * raio ** 2}`)
}


do{
    opcao = parseInt(prompt('CALCULADORA GEOMÉTRICA\n\nEscolha a opção desejada:\n1) Área do triângulo\n2) Área do retângulo\n3) Área do quadrado\n4) Área do trapézio\n5) Área do círculo\n6) Sair'))
    switch(opcao){
        case 1:
            areaTriangulo()
            break
        case 2:
            areaRetangulo()
            break
        case 3:
            areaQuadrado()
            break
        case 4:
            areaTrapezio()
            break
        case 5:
            areaCirculo()
            break
        case 6:
            alert('Finalizando...')
            break
        default:
            alert('Opção inválida')
            break
    }
} while(opcao != 6)