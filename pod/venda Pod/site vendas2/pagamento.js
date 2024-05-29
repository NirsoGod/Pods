// Função para atualizar o contador regressivo
function atualizarTempoRestante() {
    var tempoRestante = document.getElementById("tempo");
    var minutos = Math.floor(tempo / 60);
    var segundos = tempo % 60;
    tempoRestante.textContent = minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
}

var tempo = 600; // 10 minutos em segundos
atualizarTempoRestante();
var contador = setInterval(function() {
    tempo--;
    if (tempo >= 0) {
        atualizarTempoRestante();
    } else {
        clearInterval(contador);
        document.getElementById("tempo-restante").textContent = "Tempo expirado!";
    }
}, 1000);

// Simula um atraso de 3 segundos para a confirmação do pagamento
function confirmarPagamento() {
    document.getElementById("confirmacao-pagamento").style.display = "block";
    setTimeout(function(){
        document.getElementById("confirmacao-pagamento").style.display = "none";
    }, 3000); // 3 segundos
}

// Chamada da função para simular o pagamento após escanear o QR code
document.getElementById("qr-code").addEventListener("click", function(){
    confirmarPagamento();
});

// Função para copiar a chave aleatória
function copiarChave() {
    var chave = document.getElementById("chave");
    chave.select();
    document.execCommand("copy");
    alert("Chave copiada: " + chave.value);
}


function enviarComprovante() {
  
    alert("Comprovante enviado pelo WhatsApp!");
    window.location.href = "https://www.google.com.br";
}
