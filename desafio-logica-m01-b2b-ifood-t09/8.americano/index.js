

function solucao(numeros) {
    let index = 0;
    let soma = 0;

    if (numeros.length > 0) {
        for (let x of numeros) {
            soma += x;
        }
        if (numeros.length < soma) {
            for (let i = 1; i <= soma; i++) {
                index = (index + 1) % numeros.length;
                if (index === 0) {
                    index = numeros.length;
                }
            }
        } else {
            index = soma % numeros.length || numeros.length;
        }
        console.log(index);
    }

}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10))
    }
    solucao(numeros)
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