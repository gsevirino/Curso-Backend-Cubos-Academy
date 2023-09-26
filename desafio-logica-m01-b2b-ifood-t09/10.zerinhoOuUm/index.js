

function solucao(jogadores) {

    const todos_jogaram_1 = jogadores.every(jogador => {
        return jogador.jogada === 1
    })

    const todos_jogaram_0 = jogadores.every(jogador => {
        return jogador.jogada === 0
    })

    if (todos_jogaram_0 || todos_jogaram_1)
        console.log('NINGUEM')

    const jogaram_1 = jogadores.filter(jogador => {
        return jogador.jogada === 1
    })

    const jogaram_0 = jogadores.filter(jogador => {
        return jogador.jogada === 0
    })


    if (jogaram_1.length === 1)
        console.log(jogaram_1[0].nome);
    else if (jogaram_0.length === 1)
        console.log(jogaram_0[0].nome);
    else
        console.log('NINGUEM')
}



function processData(input) {
    solucao(JSON.parse(input));
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

