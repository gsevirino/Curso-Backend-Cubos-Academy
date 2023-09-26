

function solucao(min, km) {
    let somarQuilometros = 0;
    let somarMin = 0;
    let valorApagar = 0;


    if (km > 10) {

        somarQuilometros = (10 * 70) + ((km - 10) * 50);

    } else {
        somarQuilometros = km * 70;
    }

    if (min > 20) {

        somarMin = ((min - 20) * 30) + (20 * 50);

    } else {
        somarMin = min * 50;
    }

    valorApagar = Math.floor(somarQuilometros + somarMin);

    console.log(valorApagar);
}




function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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