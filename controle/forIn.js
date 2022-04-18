const notas = [6, 5, 8, 4, 9, 2]

for (let i in notas) {
    console.log(`Indice = ${i}`, `Nota = ${notas[i]}`)
}

const nomes = ["carlos", "camila", "jose"]

for (let i in nomes) {
    console.log(`Posição ${i}`, `Pessoa = ${nomes[i]}`)
}

const pessoa = {
    nome: "Ana",
    idade: 32,
    peso: 56
}

for (let i in pessoa) {
    console.log(`Atributo  ${i} = ${pessoa[i]}`)
}