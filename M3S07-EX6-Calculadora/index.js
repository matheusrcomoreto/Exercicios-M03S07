let result;

let operator;
let firstNumber;
let secondNumber;

function calculator() {
  operator = prompt(
    "Escolha qual operação deseja fazer (+, - , /, *, %, **): "
  );
  firstNumber = parseFloat(prompt("Insira o primeiro número"));
  secondNumber = parseFloat(prompt("Insira o segundo número"));
}

while (!firstNumber || !secondNumber) {
  calculator();
}

switch (operator) {
  case "+":
    result = firstNumber + secondNumber;
    console.log(`{${firstNumber} + ${secondNumber} = ${result}}`);
    break;

  case "-":
    result = firstNumber - secondNumber;
    console.log(`{${firstNumber} - ${secondNumber} = ${result}}`);
    break;

  case "/":
    result = firstNumber / secondNumber;
    console.log(`{${firstNumber} + ${secondNumber} = ${result}}`);
    break;

  case "*":
    result = firstNumber * secondNumber;
    console.log(`{${firstNumber} + ${secondNumber} = ${result}}`);
    break;

  case "%":
    result = firstNumber % secondNumber;
    console.log(`{${firstNumber} + ${secondNumber} = ${result}}`);
    break;

  case "**":
    result = firstNumber % secondNumber;
    console.log(`{${firstNumber} + ${secondNumber} = ${result}}`);
    break;
}
