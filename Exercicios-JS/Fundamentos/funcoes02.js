// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenamento uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 4))

// Retorno implicito
const subrtacao = (a, b) => a - b
console.log(subrtacao(2, 5))

const imprimir2 = a => console.log(a)
imprimir2('Legal')