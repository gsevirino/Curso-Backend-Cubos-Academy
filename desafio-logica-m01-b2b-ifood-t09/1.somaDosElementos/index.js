function solucao(lista) {
    const valores = [1, 2, 3, 4];
    let totalAcumulado = 0
    for (let i = 0; i < valores.length; i++) {
        totalAcumulado = totalAcumulado + lista[i]
    }
    console.log(totalAcumulado);
}



function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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