let a = 3

console.log(this.a)
console.log(global.a)

global.b = 123
console.log(global.b)

this.c = 456
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

this.d = false
this.e = 'teste'
console.log(module.exports)
console.log(this)

/*
Exemplo
module.exports = {
    c: 456,
    d: false,
    e: 'teste'
}
*/