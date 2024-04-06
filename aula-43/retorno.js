function calcularMedia(a, b){
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco){
    const produto = {nome, preco, estoque: 1}
    return produto
}

console.log(criarProduto('Notebook', 3000))

function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(10, 5))

console.log(areaQuadrada(9))

function ola(){
    let texto = '...'
    texto = 'olá, mundo'
    return texto
    console.log('teste')
}

console.log(ola())

function maiorIdade(idade){
    if(idade >= 18){
        return true
    } else {
        return false
    }
}

console.log(maiorIdade(20))
console.log(maiorIdade(15))