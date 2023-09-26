function processData(input) {
    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0], 10);

    const funcionarios = [];

    for (let i = 1; i < linhas.length; i++) {
        const coordenadas = linhas[i].split(" ");
        funcionarios.push({
            x: parseFloat(coordenadas[0]),
            y: parseFloat(coordenadas[1])
        });
    }

    function calcularDistancia(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    let maiorDistancia = 0;

    for (let i = 0; i < funcionarios.length; i++) {
        for (let o = i + 1; o < funcionarios.length; o++) {
            const funcionarioA = funcionarios[i];
            const funcionarioB = funcionarios[o];

            const distancia = calcularDistancia(funcionarioA.x, funcionarioA.y, funcionarioB.x, funcionarioB.y);

            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    console.log(maiorDistancia.toFixed(15));
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
