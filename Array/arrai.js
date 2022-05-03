let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Pedro'
console.log(aprovados)

aprovados.push('Camila')
console.log(aprovados)


aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']

aprovados.splice(1, 1)
console.log(aprovados)