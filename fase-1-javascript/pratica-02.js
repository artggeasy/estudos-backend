const numero = 10;
if(numero %2===0){
    console.log("O número é par");
}else{
    console.log("O número é ímpar");
}

console.log(5 + "5"); // 55
console.log(5 - "2"); //3
console.log(5 === "5");//false
console.log(5 == "5");//true
console.log(true && false);//false
console.log(true || false);//true
console.log(!true);//false

//Etapa 3
const idade = 5;
if(idade<=11){
    console.log("Criança");
}else if (idade<=17) {
    console.log("Adolescente");
}else if (idade<=59) {
    console.log("Adulto");
}else{
    console.log("Idoso");
}

//Etapa 4
const valorCompra=100;
const ehEstudante = true;

if (ehEstudante && valorCompra > 100) {
    console.log("Ganha desconto de 20%");
}else if(!ehEstudante && valorCompra > 200){
    console.log("Ganha desconto de 10%");
}else{
    console.log("Não tem desconto");
}

//Etapa 5
const ano = 2000;
if(ano%400 === 0 || (ano%4 ===0 && !ano%100==0)){
    console.log("Ano bissexto!");
}
