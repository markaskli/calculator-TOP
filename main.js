let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equals]');
let dataHistory = document.querySelector('[data-history]');
let currentData = document.querySelector('[data-current');
let clearButton = document.querySelector('[data-clear]');
let deleteButton = document.querySelector('[data-delete]');
let operationToExecute = null;

function clearScreen() {
    currentData.innerText = "";
    dataHistory.innerText = "";
}

function deleteNumber() {
    currentData.innerText = currentData.innerText.slice(0, -1);

}

function appendNumber(number) {
    if(number === '.' && currentData.innerText.includes('.')) {
        return;
    }
    else {
        currentData.innerText += number;
    }

}

function operate() {
    let answer;
    const prev = parseFloat(dataHistory.innerText);
    const current = parseFloat(currentData.innerText);
    if(isNaN(prev) || isNaN(current)) {
        return;
    }
    switch(operationToExecute) {
        case '+': 
            answer = add(prev, current);
            break;
        case '-':
            answer = subtract(prev, current);
            break;
        case '÷':
            answer = divide(prev, current);
            break;
        case 'x':
            answer = multiply(prev, current);
            break;
        default:
            return;
    }
    currentData.innerText = answer;
    operationToExecute = undefined;
    dataHistory.innerText = '';
}

function chooseOperation(operation) { 
    if(currentData.innerText === '') {
        return;
    }
    if(dataHistory.innerText !== '') {
        operate();
    }
    operationToExecute = operation;
    dataHistory.innerText = `${currentData.innerText} ${operationToExecute}`;
    currentData.innerText = "";
}


numberButtons.forEach(button => button.addEventListener('click', () => {
    appendNumber(button.innerText);
}))

operationButtons.forEach(button => button.addEventListener('click', () => {
    chooseOperation(button.innerText);
}))

equalsButton.addEventListener('click', button => {
    operate();
});

deleteButton.addEventListener('click', button => {
    deleteNumber();
});

clearButton.addEventListener('click', button => {
    clearScreen();
})

function add(var1, var2) {
    return var1+var2;
}

function subtract(var1, var2) {
    return var1-var2;
}

function multiply(var1, var2) {
    return var1*var2;
}

function divide(var1, var2) {
    if(var2 == 0) {
        return "lol"
    }
    return var1/var2;
}
