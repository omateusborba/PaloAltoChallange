const vida = document.querySelector("#vida")
let lifeBar = 100

vida.value = lifeBar

const pergunta = document.querySelector('#pergunta')
const user = document.querySelector("#user")
const frase = document.querySelector("#frase")

// const opc1 = document.querySelector('#opc1')
// const opc2 = document.querySelector('#opc2')
// const opc3 = document.querySelector('#opc3')
// const opc4 = document.querySelector('#opc4')

function atualizarBarraDeVida() {
    const vida = document.getElementById('vida');
    lifeBar -= 10; // Reduzir 10 unidades a cada resposta correta
    if (lifeBar <= 0) {
        lifeBar = 0; 
        alert("Você venceu") // Certificar que a vida não seja menor que 0
    }else if (lifeBar >= 31 && lifeBar <= 60) {
        vida.classList.add("is-warning")
    } else if (lifeBar < 30){
        vida.classList.add("is-error")
    } else {
        vida.classList.add("is-success")
    }
    vida.value = lifeBar; // Atualiza a barra de progresso
}

function gerarNovoDesafio() {
    // Gerar num1 e num2 aleatórios e exibir a pergunta
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    const question = num1 + " x " + num2 + " = ?";
    document.getElementById('pergunta').textContent = question; // Certifique-se de que o elemento 'pergunta' exista no HTML

    const respCerta = num1 * num2; // Número fixo correto

    // Array para guardar os números aleatórios
    const randomNumbers = [];

    // Gerar 3 números aleatórios
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 20) + 1; // Números entre 1 e 20
        randomNumbers.push(randomNumber);
    }

    // Adicionar o número fixo correto ao array
    randomNumbers.push(respCerta);

    // Embaralhar os números
    randomNumbers.sort(() => Math.random() - 0.5);

    // Selecionar todos os h5 e botões
    const h5Elements = document.querySelectorAll('.opc');
    const buttons = document.querySelectorAll('.opc-btn');

    // Exibir os números nos h5 e configurar evento de clique nos botões
    h5Elements.forEach((h5, index) => {
        h5.textContent = randomNumbers[index];

        // Adicionar evento de clique ao botão correspondente
        buttons[index].onclick = function() {
            // Verificar se o número clicado é a resposta correta
            if (parseInt(h5.textContent) === respCerta) {
                // Chamar a função novamente para gerar um novo desafio   
                // lifeBar -= 10
                // vida.value = lifeBar                                       
                gerarNovoDesafio();
                atualizarBarraDeVida()
            }
        };
    });
}


// Chama a função para iniciar o processo assim que a página carregar
window.onload = function() {
    gerarNovoDesafio();
}