function processData(input) {
    let texto;
    const restante = input.slice(1);
    if (input === input.toUpperCase()) {
        texto = input.toLowerCase();
    } else if (input === input.toLowerCase()) {
        texto = input;
    } else if (input[0] === input[0].toLowerCase() && restante === restante.toUpperCase()) {
        texto = input[0].toUpperCase() + input.slice(1).toLowerCase();
    } else if (input[0] === input[0].toUpperCase() && restante === restante.toLowerCase()) {
        texto = input;
    } else {
        texto = input;
    }
    console.log(texto)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});