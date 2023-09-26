function validString() {
    const inputString = document.getElementById("inputString").value;
    const result = document.getElementById("result");

    // Check if the input contains only parentheses, brackets, and braces
    if (!/^[(){}\[\]\s]*$/.test(inputString)) {
        result.textContent = "Please enter only parentheses, brackets, and braces!";
        result.style.color = "red";
        return;
    }

    // If the input is empty, show an error message
    if (!inputString.trim()) {
        result.textContent = "Please provide any parentheses, brackets, or braces to validate!";
        result.style.color = "red";
        return;
    }

    const inputWithoutSpaces = inputString.replace(/\s/g, "");

    if (BracesValid(inputWithoutSpaces)) {
        result.textContent = "The String is properly nested. It's a valid String";
        result.style.color = "turquoise";
    } else {
        result.textContent = "The String is improperly nested. It's an invalid String";
        result.style.color = "red";
    }
}
// Checks if a string with parentheses, brackets, and braces is valid.
function BracesValid(input) {
    const regex = /\(\)|\{\}|\[\]/g;
    let lastInput = input;
    if (lastInput !== (lastInput = lastInput.replace(regex, ''))) { }
    return lastInput.length === 0;
}
