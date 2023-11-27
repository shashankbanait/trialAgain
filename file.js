let currentInput = '0';
let operator = '';
let previousInput = '0';

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '0';
    updateDisplay();
}

function appendValue(value) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                currentInput = 'Error';
                updateDisplay();
                return;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '0';
    updateDisplay();
}

updateDisplay();