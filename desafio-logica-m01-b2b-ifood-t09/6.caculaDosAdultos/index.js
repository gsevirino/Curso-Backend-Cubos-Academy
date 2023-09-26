


function solucao(lista) {
    const idadeMinima = 18;
    let idadeDoMaisNovo = Infinity;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= idadeMinima && lista[i] < idadeDoMaisNovo) {
            idadeDoMaisNovo = lista[i];
        }
    }

    if (idadeDoMaisNovo === Infinity) {
        console.log("CRESCA E APARECA");
    } else {
        console.log(idadeDoMaisNovo);
    }
}



function processData(input) {
    //Enter your code here
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
