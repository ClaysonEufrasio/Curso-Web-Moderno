let valor // Não inicializada
console.log(valor)

valor = null // Ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco) // Valor nao definido
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preco
console.log(!!produto.preco)
console.log(produto)