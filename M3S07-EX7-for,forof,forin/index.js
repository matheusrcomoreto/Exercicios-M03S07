const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];
let sum = 0;
let i =0;

for(let number in numbers ){
    sum += numbers[number];
    i++;   
}

console.log("A soma dos numeros é " + sum);

let media = sum/i;

console.log("A média dos números é " + media);

const notas = {
bimestre1: 7.0,
bimestre2: 3.7,
bimestre3: 6.4,
bimestre4: 8.6
}
let soma = 0;
let i2 = 0;

for(let nota in notas){
    soma += notas[nota];
    i2++;

}
console.log("A soma das notas é " + Math.round(soma));

let media2 = soma/i2;
console.log("A média das notas é " + media2.toFixed(2));

if(media2 < 7){
    console.log("O aluno não foi aprovado com a nota")
}else{
    console.log("O aluno foi aprovado")
}



