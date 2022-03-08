const produto1 = {}
produto1.nome = 'Celular Ultra Mega'
console.log(produto1)

produto1.preco = 4998.90
console.log(produto1)

produto1['Desconto'] = 0.40
console.log(produto1)

const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        tipo: 'Regata',
        cor: 'Azul',
        qts: 3
    }
}

console.log(produto2)