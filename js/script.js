function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const rsenha = document.querySelector('input[name=rsenha]')

    if (rsenha.value === senha.value){
        alert('senha confere')
    } else {
        alert('senha não confere')
    }

}
