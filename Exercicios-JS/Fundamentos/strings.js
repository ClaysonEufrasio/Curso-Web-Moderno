const escola = "Cod3r"

console.log(escola.charAt(4)) // Qual a letra na posição 4
console.log(escola.charAt(6)) // Indice que não existe retorna um valor vazio
console.log(escola.charCodeAt(3)) // Tabela unicode
console.log(escola.indexOf('3')) // Existe o caractere na variavel 3
console.log(escola.substring(1)) // Imprime apartir do indice 1
console.log(escola.substring(0, 3)) // Imprime apartir do indice 0 ate indice 2
console.log('escola '.concat(escola).concat('!')) // Funcao de concatenar
console.log(escola.replace(3, 'e')) // Troca um valor pelo outro 3 por e
console.log("Ana, Maria, Pedro".split(',')) // Converte para um array