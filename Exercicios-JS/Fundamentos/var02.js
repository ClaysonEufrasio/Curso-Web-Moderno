var numero = 1 // var = tem escopro global e de função
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)
