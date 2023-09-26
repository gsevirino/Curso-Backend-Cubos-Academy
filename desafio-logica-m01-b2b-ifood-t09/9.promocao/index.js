


function solucao(precos) {
    let menorPreco = Infinity;
    let desconto;
    let totalPagar = 0;
    let soma = 0;
    for (let preco of precos) {
        soma += preco;
        if (precos.length >= 3) {
            if (preco < menorPreco) {
                menorPreco = preco;
                desconto = menorPreco * 50 / 100;
            }
            totalPagar = soma - desconto;
        } else {
            totalPagar = soma;
        }
    }
    console.log(totalPagar);
}




function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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