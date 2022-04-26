const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in nums) {
    if (i == 5) {
        break
    }
    console.log(`Indice ${i} = Num ${nums[i]}`)
}

console.log('Teste Continue')

for (let i in nums) {
    if (i == 5) {
        continue
    }
    console.log(`Indice ${i} = Num ${nums[i]}`)
}


forFora: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break forFora
        }
        console.log(`Par a = ${a} e b = ${b}`)
    }
}