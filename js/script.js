//validação de senha
function verificaCaracteresEspeciais(senha) {
    const maiuscula = /[A-Z]/
    const minuscula = /[a-z]/
    const num = /[0-9]/
    const esp = /[!@#$%^&*(),.?":{}|<>]/

    return maiuscula.test(senha) && minuscula.test(senha) && num.test(senha) && esp.test(senha)
}


function confereSenha() {
    const senha = document.getElementById("senha").value;
    const rSenha = document.getElementById("rsenha").value;
    const validar = document.querySelector("#validar");
    const btn = document.querySelector("#btn");

    validar.textContent = ""; // Limpa o conteúdo do elemento

    if (!senha || !rSenha) {
        validar.textContent = "Por favor, preencha ambas as senhas.";
    } else if (senha !== rSenha) {
        validar.textContent = "As senhas não conferem, tente novamente";
    } else if (senha.length < 8) {
        validar.textContent = "A senha deve conter no minimo 8 caractéres"
    } else if (!verificaCaracteresEspeciais(senha)) {
        validar.textContent = "A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.";
    } else {
        btn.setAttribute("href", '../views/index.html');
    }
}


//Função dos vídeos na parte de treinamento
$(document).ready(function () {
    var videos = [
        "Eh7XY7VlfAM?si=NFHHIpFpSDRa_w6A", // Vídeo 1
        "kq0kh0XvT9c?si=zIzs6-RlbgdiTZsB", // Vídeo 2
        "tX-jJm0Pl0Q?si=TKB-J69xbp3r_fbz",
        "Ikl1WuJ5Wt8?si=CPP48RP8XcFbnyZh",
        "NJkH8ND3Pu4?si=YBx6kBKaAm1jLP_O"  // Vídeo 3
    ];
    var currentIndex = 0;

    function updateVideo(index) {
        $("#youtubeVideo").attr("src", "https://www.youtube.com/embed/" + videos[index]);
    }

    $("#prox").click(function () {
        currentIndex = (currentIndex + 1) % videos.length; // Volta para o primeiro vídeo
        updateVideo(currentIndex);
    });

    $("#voltar").click(function () {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length; // Vai para o último vídeo se estiver no primeiro
        updateVideo(currentIndex);
    });
});


//Função para tocar a música nas páginas
function play() {
    const musica = document.getElementById("audio");
    musica.play();
}


//Toast da parte do perfil
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

function openGallery() {
    const gallery = document.getElementById("gallery");
    // Exibe a galeria se ela estiver oculta, e esconde se estiver visível
    if (gallery.style.display === "none" || gallery.style.display === "") {
        gallery.style.display = "flex";
    } else {
        gallery.style.display = "none";
    }
}

function selectProfile(fotoUrl) {
    const selectedProfile = document.getElementById("selected-profile");

    // Atualiza a imagem do perfil principal com a foto selecionada
    selectedProfile.src = fotoUrl;

    // Fecha a galeria após selecionar a foto
    //document.getElementById("gallery").style.display = "none";
}




//A partir daqui está toda a mecânica do jogo em si!!
const vida = document.querySelector("#vida")
const vida2 = document.querySelector("#vida1")
let lifeBar = 100
let lifeBar2 = 100

vida2.value = lifeBar2
vida.value = lifeBar

const pergunta = document.querySelector('#pergunta')
const user = document.querySelector("#user")
const frase = document.querySelector("#frase")

function atualizarBarraDeVida() {
    const vida = document.getElementById('vida');
    lifeBar -= 25; // Reduzir 25 unidades a cada resposta correta
    if (lifeBar <= 0) {
        lifeBar = 0;
        $('#exibirModal').modal('show')// Certificar que a vida não seja menor que 0
    } else if (lifeBar >= 31 && lifeBar <= 60) {
        vida.classList.add("is-warning")
    } else if (lifeBar < 30) {
        vida.classList.add("is-error")
    } else {
        vida.classList.add("is-success")
    }
    vida.value = lifeBar; // Atualiza a barra de progresso do vilão
}

function atualizarBarraHeroi() {
    const vida2 = document.getElementById('vida1')
    lifeBar2 -= 10
    if (lifeBar2 <= 0) {
        lifeBar2 = 0;
        $('#exibirModal2').modal('show') // Certificar que a vida não seja menor que 0
    } else if (lifeBar2 >= 31 && lifeBar2 <= 60) {
        vida2.classList.add("is-warning")
    } else if (lifeBar2 < 30) {
        vida2.classList.add("is-error")
    } else {
        vida2.classList.add("is-success")
    }

    vida2.value = lifeBar2
}

function arcade() {
    let pontuacao = 0
    const pontos = document.getElementById("vida")
    pontuacao += 10
    pontos.textContent = pontuacao.toString(pontuacao)
}

function gerarNovoDesafio() {
    // Gerar num1 e num2 aleatórios e exibir a pergunta
    let num1 = 0
    const fase1 = document.getElementById('fase1')
    const fase2 = document.getElementById('fase2')
    const fase3 = document.getElementById('fase3')
    const fase4 = document.getElementById('fase4')
    const fase5 = document.getElementById('fase5')
    const fase6 = document.getElementById('fase6')
    const fase7 = document.getElementById('fase7')
    const fase8 = document.getElementById('fase8')
    const fase9 = document.getElementById('fase9')
    if (document.body.contains(fase1)) {
        num1 = 1
    } else if (document.body.contains(fase2)) {
        num1 = 2
    } else if (document.body.contains(fase3)) {
        num1 = 3
    } else if (document.body.contains(fase4)) {
        num1 = 4
    } else if (document.body.contains(fase5)) {
        num1 = 5
    } else if (document.body.contains(fase6)) {
        num1 = 6
    } else if (document.body.contains(fase7)) {
        num1 = 7
    } else if (document.body.contains(fase8)) {
        num1 = 8
    } else if (document.body.contains(fase9)) {
        num1 = 9
    } else {
        num1 = Math.floor(Math.random() * 10);
    }

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
                gerarNovoDesafio();
                atualizarBarraDeVida()
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