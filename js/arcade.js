function play() {
    const musica = document.getElementById("audio");
    musica.play();
}

const vida2 = document.querySelector("#vida1")
let lifeBar2 = 100

vida2.value = lifeBar2

const pergunta = document.querySelector('#pergunta')
const user = document.querySelector("#user")
const frase = document.querySelector("#frase")
const msg = document.getElementById("totalPontos")
const acerto = document.getElementById("acertos")

function atualizarBarraHeroi() {
    const vida2 = document.getElementById('vida1')
    lifeBar2 -= 10
    if (lifeBar2 <= 0) {
        lifeBar2 = 0;
        $('#exibirModal').modal('show') // Certificar que a vida não seja menor que 0
        msg.textContent = "A sua pontuação foi: " + pontuacao
        acerto.textContent = "Total de acertos: " + acertos
    } else if (lifeBar2 >= 31 && lifeBar2 <= 60) {
        vida2.classList.add("is-warning")
    } else if (lifeBar2 < 30) {
        vida2.classList.add("is-error")
    } else {
        vida2.classList.add("is-success")
    }

    vida2.value = lifeBar2
}

let pontuacao = 0
let acertos = 0
function arcade() {
    pontuacao += 10
    acertos += 1
    const pontos = document.getElementById("vida")
    pontos.textContent = pontuacao
    
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
        buttons[index].onclick = function () {
            // Verificar se o número clicado é a resposta correta
            if (parseInt(h5.textContent) === respCerta) {
                // Chamar a função novamente para gerar um novo desafio    
                arcade()                                 
                gerarNovoDesafio();
            } else {
                //tira 10 de vida caso o usuário erre a conta.
                atualizarBarraHeroi();
                gerarNovoDesafio();
            }
        };
    });
}

// Chama a função para iniciar o processo assim que a página carregar
window.onload = function () {
    gerarNovoDesafio();
}