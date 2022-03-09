let numero = 1 // let tem escopro global , de função e de bloco
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log("Fora =", numero)
