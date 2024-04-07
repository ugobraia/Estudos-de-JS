let pessoa = {
    nome: 'hugo', 
    idade: 21, 
    dizerOla(){
        console.log('Olá mundo! Meu nome é '+ this.nome + ' e eu tenho ' + this.idade + ' anos.')
    }
}


console.log(pessoa.nome) // hugo

console.log(pessoa.idade) // 21

pessoa.dizerOla() // Olá!