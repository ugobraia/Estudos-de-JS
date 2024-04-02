const idade = prompt("Digite sua idade: ")

if (idade >= 18){
    alert("Você é maior de idade ("+ idade +" anos).")
} else if (idade > 12){
    alert("Você é menor de idade ("+ idade +" anos).")
} else if (idade >= 4){
    alert("Você é uma criança ("+ idade +" anos).")
} else {
    alert("...")
}

const resultado = (6 !== 6) ? "verdadeiro" : "falso"

console.log(resultado)