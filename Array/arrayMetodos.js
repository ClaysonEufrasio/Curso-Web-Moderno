const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Elimina ultimo alemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no ultimo elemento do array 
console.log(pilotos)

pilotos.shift() // Elimina o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamiton') // Adiciona no priemiro elemento do array
console.log(pilotos)


pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona apartir da posição
console.log(pilotos)


pilotos.splice(3, 1) // Elimina apartir da posição 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Cria um novo array apartir da posição
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)