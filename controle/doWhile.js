function inteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = inteiroAleatorio(-1, 10)
    console.log(`Opção escolida ${opcao}`)
} while (opcao != -1)

