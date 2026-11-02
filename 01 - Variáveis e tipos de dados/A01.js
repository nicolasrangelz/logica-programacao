// let idade = 25;            // número
// const nome = "Nícolas";    // texto (string)
// let maiorDeIdade = true;   // verdadeiro/falso (booleano)
// let nada = null;           // "vazio" de propósito
// let indefinido;            // sem valor ainda (undefined)


// Exercicios

/*
Crie variáveis com seu nome, idade e se você gosta de café (true/false) e mostre tudo com console.log.

Sem rodar, preveja o resultado de "10" + 5 e depois confira no console.

Declare uma const e tente mudar o valor dela. O que aparece no erro?
*/

// Exercício 1
let name = "Nícolas";
let age = 25;
let likesCoffee = true;

let likeCoffeeString = likesCoffee ? "eu amo café" : "não gosto de café";

console.log("Meu nome é " + name + ", tenho " + age + " anos e " + likeCoffeeString);

// Exercício 2
let result = "10" + 5;
console.log(result); // Resultado: "105"

// Exercício 3
const pi = 3.14;    
pi = 3.14159; // Isso causará um erro: TypeError: Assignment to constant variable.
