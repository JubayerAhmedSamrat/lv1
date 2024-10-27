const screenPara = document.getElementById('screenPara');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;

        if (value >= '0' && value <= '9' || value === '.') {
            handleNumber(value);
        } else if (value === 'AC') {
            clearAll();
        } else if (value === 'Del') {
            deleteLast();
        } else if (value === '=') {
            calculate();
        } else {
            handleOperator(value);
        }
        updateScreen();
    });
});

function handleNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
}

function handleOperator(op) {

    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr === 0 ? 'Error' : prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
}

function updateScreen() {
    screenPara.innerText = previousInput + ' ' + operator + ' ' + currentInput;
}
