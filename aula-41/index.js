function ola(){
    alert('Olá mundo!')
}

ola()

function dobro(x){
    alert('O dobro de ' + x + ' é ' + (x * 2))
}

dobro(5)

function dizerOla(nome){
    alert('Olá ' + nome)
}

dizerOla('Hugo')

function soma(a, b){
    alert('A soma de ' + a + ' e ' + b + ' é ' + (a + b))
}

soma(2, 3)
soma(5, 5)

function criarUsuario(nome, email, senha, tipo = 'admin'){
    const usuario = {nome, email, senha, tipo}
    console.log(usuario)
}

criarUsuario('Hugo', 'hblimaafonso@gmail.com', '123456')

function muitosParametros(nome, telefone, endereco, aniversario, email, senha){

}

function objetosComoParametros(usuario){
    usuario.nome
    usuario.email
}

muitosParametros('Hugo', '999999999', 'Rua 1', '01/01/2000', 'hblimaafonso@gmail.com', '123456')

const dadosDoUsuario = {
    nome: 'Hugo',
    telefone: '999999999',
    endereco: 'Rua 1',
    aniversario: '01/01/2000',
    email: 'hblimaafonso@gmail.com',
    senha: '123456'
}

objetosComoParametros(dadosDoUsuario)