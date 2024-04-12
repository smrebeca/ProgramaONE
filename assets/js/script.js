// Função para validar o formulário
function validateForm() {
    // Capturando os valores dos campos
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("assunto").value;
    var message = document.getElementById("mensagem").value;

    // Verificando se os campos estão vazios
    if (name === "" || email === "" || subject === "" || message === "") {
        // Exibindo mensagem de erro
        alert("Por favor, preencha todos os campos.");
        return false; // Impedindo o envio do formulário
    } else {
        // Exibindo mensagem de envio
        alert("Mensagem enviada com sucesso!");
        return true; // Permitindo o envio do formulário
    }
}
