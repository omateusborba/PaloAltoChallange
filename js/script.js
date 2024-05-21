function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const rsenha = document.querySelector('input[name=rsenha]')
    const carEsp = "!@#$%&*-_=+§)({}[]/?|"
    var n = rsenha.length


    if (rsenha.value === senha.value) {
        alert('dEu')
    } else {
        alert('senha não confere')
    }
}

