const a = 10;
const b = 3;
// Operadores Aritméticos
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Operadores de Comparação
console.log(10 > 3);
console.log(10 === 10);
console.log(10 !== 5);
console.log(10 >= 10);
console.log("20" === 20); //compara valor e tipo
console.log("20" == 20);// compara apenas valor (converte os tipos por baixo dos panos)

//estrutura condicional
const nota = 7.5;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//operadores lógicos
const idade = 20;
const temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

if (idade < 18 || !temCarteira) {
  console.log("Não pode dirigir");
}