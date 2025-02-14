let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('result').value = currentNumber;
}

function setOperator(op) {
  if (currentNumber === '') return;
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (currentNumber === '' || previousNumber === '' || operator === '') return;

  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
  document.getElementById('result').value = currentNumber;
}
