

function solucao(texto) {
    const array = texto.split(" ");
    const contarPalavra = array.filter((array) => array.length != "")
    console.log(contarPalavra.length);
}

function processData(input) {
    solucao(input)
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