let screen = document.getElementById("result");
let currentInput = "";

function insert(value) {
    currentInput += value;
    screen.value = currentInput;
}

function clearScreen() {
    currentInput = "";
    screen.value = "";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    screen.value = currentInput;
}

function calculate() {
    // Handling exponentiation using '^' symbol
    if (currentInput.includes('^')) {
        currentInput = currentInput.replace("^", "**");
    }

    try {
        currentInput = eval(currentInput).toString();
        screen.value = currentInput;
    } catch (error) {
        screen.value = "Error";
    }
}
