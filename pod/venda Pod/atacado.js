// Preço do produto no atacado
const wholesalePrice = 59.90;

// Atualiza o valor total do produto quando a quantidade é alterada
function updateTotal(inputId, totalId) {
    const quantity = parseInt(document.getElementById(inputId).value);
    const total = quantity * wholesalePrice;
    document.getElementById(totalId).textContent = `Total: R$${total.toFixed(2)}`;
}

// Adicione event listeners para cada input
document.getElementById('quantity1').addEventListener('change', () => updateTotal('quantity1', 'total1'));

// Adicione mais event listeners conforme necessário para outros produtos

// Event listener para o botão de confirmar compra
document.getElementById('confirmButton').addEventListener('click', () => {
    alert('Compra confirmada! Obrigado por comprar conosco.');
});
