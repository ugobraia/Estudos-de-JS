const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos 
// Push (No final do array)
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// Unshift (No início do array)
tamanho = arr.unshift("Bilbo")
console.log(arr)
console.log(tamanho)



// Remover Elementos
// Pop (No final do array)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Shift (No início do array)
let primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)


// Pesquisar por um elemento 
// includes 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)



// Cortar e Concatenar 
// slice 
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat 
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

// Substituição dos Elementos 
// splice 
const a = sociedade.splice(indice, 1, 'Sauron')
console.log(sociedade)
console.log(a)



// Iterar sobre os elementos 
for(let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento +' se encontra na posicao '+ i)
}