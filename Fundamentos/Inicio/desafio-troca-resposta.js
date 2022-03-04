let a = 7;
let b = 94;
let c = a;

// Antes da troca
console.log("A variavél a = " + a);
console.log("A variavél b = " + b);

/* 
a = b;
b = c;
*/

[a, b] = [b, a]

// Depois da troca 
console.log("A variavél a = " + a);
console.log("A variavél b = " + b);
