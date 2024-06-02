function calculateTotal() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var pricePerProduct = 69.90;
    var total = quantity * pricePerProduct;

    // Aplicar desconto a cada 2 produtos
    var discount = Math.floor(quantity / 2) * 12;
    total -= discount;

    document.getElementById("totalPrice").innerHTML = "Valor Total: R$ " + total.toFixed(2);
    document.getElementById("discount").innerHTML = "Desconto: R$ " + discount.toFixed(2);
}

function checkForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var cep = document.getElementById("cep").value;
    var address = document.getElementById("address").value;
    var houseNumber = document.getElementById("houseNumber").value;

    if (name && phone && cep && address && houseNumber) {
        // Salvar o valor total da compra no armazenamento local
        var total = document.getElementById("totalPrice").innerHTML.split(" ")[3]; // Extrair o valor total
        localStorage.setItem("totalPrice", total);
        
        // Redirecionar para a página de pagamento
        window.location.href = "pagamento.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
