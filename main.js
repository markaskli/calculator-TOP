let screen = document.getElementById('currentScreen');
let num1 = null;
let operator; 

function operate() {
    num2 = parseInt(screen.textContent);
    if(operator == '+') {
        screen.textContent = add(num1, num2);
    }
    else if(operator == '-') {
        screen.textContent = subtract(num1, num2);
    }
    else if(operator == '÷') {
        screen.textContent = divide(num1, num2);
    }
    else if(operator == 'x') {
        screen.textContent = multiply(num1, num2);
    }
    else {
        screen.textContent = "ERROR"
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
    if(var2 == 0) {
        return "lol"
    }
    return var1/var2;
}

function chooseOperator(buttonVal) {
    num1 = parseInt(screen.textContent);
    operator = buttonVal;
    clearScreen();
}

function display(number) {
    screen.textContent += number;
}

function clearScreen() {
    screen.textContent = "";
}

