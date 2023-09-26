const valorDoProduto = 100;
const numeroDeParcelas = 13;

if (numeroDeParcelas === 1) {
    //à vista com 10% de desconto
    const desconto = valorDoProduto * 10 / 100;
    const valorAPagar = valorDoProduto - desconto;
    console.log(`você deve pagar R$ ${valorAPagar}, pois à vista tem 10% de desconto`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado sem juros
    const valorDaParcela = (valorDoProduto / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$ ${valorDaParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcelado com juros
    const valorAPagarComJuros = (valorDoProduto * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidência de juros`);
} else {
    //numero de parcelas invalido
    console.log("Número de parcelas inválido");
}