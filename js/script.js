function confereSenha(senha) {
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

    let mensagensErro = [];

    if (!regexMaiuscula.test(senha)) {
        mensagensErro.push('uma letra maiúscula');
    }
    if (!regexMinuscula.test(senha)) {
        mensagensErro.push('uma letra minúscula');
    }
    if (!regexNumero.test(senha)) {
        mensagensErro.push('um número');
    }
    if (!regexEspecial.test(senha)) {
        mensagensErro.push('um caractere especial');
    }

    return mensagensErro.length === 0 ? null : 'A senha deve conter pelo menos ' + mensagensErro.join(', ') + '.';
}

function calculaForcaSenha(senha) {
    let forca = 0;
    if (/[a-z]/.test(senha)) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) forca++;
    return forca;
}

function mostraForcaSenha() {
    const senha = document.querySelector('input[name=senha]').value;
    const forca = calculaForcaSenha(senha);
    const forcaTexto = ["Muito Fraca", "Fraca", "Média", "Forte", "Muito Forte"];
    const feedback = document.getElementById('feedbackSenha');

    feedback.textContent = "Força da senha: " + forcaTexto[forca];
}

function validarSenhaNoSubmit(event) {
    const senha = document.querySelector('input[name=senha]').value;
    const mensagemErro = confereSenha(senha);
    if (mensagemErro) {
        event.preventDefault();
        alert(mensagemErro);
    }
}

document.querySelector('input[name=senha]').addEventListener('input', mostraForcaSenha);
document.querySelector('form').addEventListener('submit', validarSenhaNoSubmit);
