console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'Bola'
console.log(obj.nome)

function Obj(nome, idade) {
    this.nome = nome
    this.exec = function () {
        console.log('Exc...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()

