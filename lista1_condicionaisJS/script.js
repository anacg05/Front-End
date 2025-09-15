/* 


// EXERCICIO 1

let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
  alert(numero + " é um número par.");

} else {
  alert(numero + " é um número ímpar.");
  
}

if (numero % 3 === 0) {
  alert(numero + " é múltiplo de 3.");

}

if (numero % 5 === 0) {
  alert(numero + " é múltiplo de 5.");

}

// EXERCICIO 2

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

let maior;

if (num1 >= num2 && num1 >= num3) {
  maior = num1;

} else if (num2 >= num1 && num2 >= num3) {
  maior = num2;

} else {
  maior = num3;

}

alert("O maior número é: " + maior);


// EXERCICIO 3

let idade = prompt("Digite sua idade:");
idade = parseInt(idade);

if (idade < 2) {
  alert("Bebê.");

} else if (idade < 13) {
  alert("Criança");

} else if (idade < 18) {
  alert("Adolescente");

} else if (idade < 60) {
  alert("Adulto");

} else {
  alert("Idoso");

}



// EXERCICIO 4

let escolha = prompt("Escolha uma opção:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius");

if (escolha === "1") {

    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F");

} else if (escolha === "2") {

    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C");

} else {

    alert("Opção inválida.");
}



// EXERCICIO 5

let velocidade = parseFloat(prompt("Digite a velocidade do carro em Km/h:"));

if (velocidade > 80) {

    let excesso = velocidade - 80;
    let multa = excesso * 5;

    alert("Você foi multado! \n" +
          "Velocidade acima do limite de 80Km/h.\n" +
          "Valor da multa: R$" + multa.toFixed(2));

} else {
    alert("Velocidade dentro do limite.");

}

// EXERCICIO 6

let distancia = parseFloat(prompt("Digite a distância da viagem em Km:"));

let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;

} else {
    preco = distancia * 0.45;

}

alert("O preço da passagem é R$" + preco.toFixed(2));


// EXERCICIO 7

let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"));
let anoAtual = new Date().getFullYear(); // pega o ano atual automaticamente
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert("Você pode votar.");

} else {
    alert("Você não pode votar.");

}
    
*/

// EXERCICIO 8


let ano = parseInt(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert("O ano " + ano + " é bissexto.");

} else {
    alert("O ano " + ano + " não é bissexto.");

}

