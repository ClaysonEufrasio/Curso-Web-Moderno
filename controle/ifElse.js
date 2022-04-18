const impromirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

impromirResultado(10)
impromirResultado(4)
impromirResultado('Epa') // Cuidado !!!
