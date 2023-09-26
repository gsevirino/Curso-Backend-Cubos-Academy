function processData(input) {
    const linhas = input.trim().split("\n");
    const senhaCorreta = linhas[0];
    const palavraDigitada = linhas.slice(1);

    function verificaSenha(senhaCorreta, palavraDigitada) {

        let senhaIndex = 0;
        let senhaCorretaEncontrada = false;

        for (let i = 0; i < palavraDigitada.length; i++) {

            if (palavraDigitada[i] === senhaCorreta[senhaIndex]) {
                senhaIndex++;
            }

            if (senhaIndex === senhaCorreta.length) {
                senhaCorretaEncontrada = true;
                break;
            }
        }

        if (senhaCorretaEncontrada) {
            console.log("SIM");
        } else {
            console.log("NAO");
        }
    }

    for (let i = 0; i < palavraDigitada.length; i++) {
        verificaSenha(senhaCorreta, palavraDigitada[i]);
    }
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
