alert('Robô da Tabuada\n\nOlá, eu vou te ajudar a estudar a tabuada de qualquer número, do 1 ao 20!');
let n = parseInt(prompt('Digite um número:'));
let tabuada = '';

for (let i = 1; i <= 20; i++){
    tabuada += n +' x '+ i +' = '+ (n * i) +'\n';
}

alert('A tabuada do '+ n +' de 1 a 20 é a seguinte: \n'+ tabuada);