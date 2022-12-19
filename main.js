let screen = document.getElementById('currentScreen');

function operate(operator, num1, num2) {
    if(operator == '+') {
        return add(num1, num2);
    }
    else if(operator == '-') {
        return subtract(num1, num2);
    }
    else if(operator == '+') {
        return add(num1, num2);
    }
    else if(operator == '*') {
        return multiply(num1, num2);
    }
    else {
        return;
    }

}

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
    return var1/var2;
}

function display(number) {
    screen.textContent += number;
}

function clear() {
    screen.textContent = "";
}