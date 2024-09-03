function confereSenha() {
    const senha = document.getElementById("senha").value;
    const rSenha = document.getElementById("rsenha").value;
    const validar = document.querySelector("#validar");

    validar.textContent = ""; // Limpa o conteúdo do elemento

    if (!senha || !rSenha) {
        validar.textContent = "Por favor, preencha ambas as senhas.";
    } else if (senha !== rSenha) {
        validar.textContent = "As senhas não conferem, tente novamente";
    } else {
        alert("Deu Certo");
    }
}