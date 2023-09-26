const valorDoProduto = 100;
const quantidadeDeParcelas = 3;

if (quantidadeDeParcelas === 1) {
    const desconto = valorDoProduto * 10 / 100;
    const valorAPagar = valorDoProduto - desconto;
    console.log(`você deve pagar ${valorDoProduto}, pois à vista tem 10% de desconto`)
} else {
    const valorDaParcela = valorDoProduto / quantidadeDeParcelas;
    console.log(`Você deve pagar ${quantidadeDeParcelas} parcelas de R$${valorDaParcela.toFixed(2)}`);
}