let pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua: Maria',
        numero: 1000
    }
}

let { nome, idade } = pessoa
console.log(nome, idade)
console.log(pessoa)

nome = 'camila'

console.log(nome, idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)