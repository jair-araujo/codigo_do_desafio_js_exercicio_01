/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
 */

let firstNumberTyped = Number(prompt('Digite um numero'));
let secondNumberTyped = Number(prompt('Digite outro numero'));

function sum() {
  let sum = firstNumberTyped + secondNumberTyped;
  return sum;
}

function subtract() {
  let subtract = firstNumberTyped - secondNumberTyped;
  return subtract;
}

function multiply() {
  let multiply = firstNumberTyped * secondNumberTyped;
  return multiply;
}

function divide() {
  let divide = firstNumberTyped / secondNumberTyped;
  return divide;
}

function rest() {
  let rest = firstNumberTyped % secondNumberTyped;
  return rest;
}

function evenOrOdd() {
  let result = sum();
  if (result % 2 == 0) {
    return `A soma dos dois números é Par: ${result}`;
  } else {
    return `A soma dos dois números é Ímpar: ${result}`;
  }
}

function equal() {
  if (firstNumberTyped === secondNumberTyped) {
    return 'Os dois números digitados são iguais';
  } else {
    return 'Os dois números digitados são diferentes';
  }
}

alert(`A Soma dos números é: ${sum()}`);

alert(`A Subtração dos números é: ${subtract()}`);

alert(`A Multiplicação dos números é: ${multiply()}`);

alert(`A Divisão dos números é: ${divide()}`);

alert(`O Resto da divisão dos números é: ${rest()}`);

alert(evenOrOdd());

alert(equal());
