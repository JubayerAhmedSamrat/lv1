function clearResult() {
    document.getElementById("result").value = "";
}

function appendCharacter(char) {
    document.getElementById("result").value += char;
}

function calculateResult() {
    let result = document.getElementById("result").value;
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}


function deleteCharacter() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}
