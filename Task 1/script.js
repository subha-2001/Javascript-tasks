function validString() {
    const inputString=document.getElementById("inputString").value;
    const result=document.getElementById("result");
    if (!inputString.trim()) {
        result.textContent = "Please provide any string to validate!";
        result.style.color="red";
        return;
    }
    const inputWithoutSpaces = inputString.replace(/\s/g, "");

    if (BracesValid(inputWithoutSpaces)) {

        result.textContent="Valid";
        result.style.color="turquoise";
    
    }
    else {
        result.textContent="Invalid";
        result.style.color="red";
    }
}
function BracesValid(input) {
    const regex = /\(\)|\{\}|\[\]/g;
    let lastInput = input;
    while (lastInput !== (lastInput = lastInput.replace(regex, ''))) { }
    return lastInput.length === 0;
}
