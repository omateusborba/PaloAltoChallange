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
    } else {
        btn.setAttribute("href", '../views/index.html');
    }
}

$(document).ready(function(){
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

    $("#prox").click(function(){
        currentIndex = (currentIndex + 1) % videos.length; // Volta para o primeiro vídeo
        updateVideo(currentIndex);
    });

    $("#voltar").click(function(){
        currentIndex = (currentIndex - 1 + videos.length) % videos.length; // Vai para o último vídeo se estiver no primeiro
        updateVideo(currentIndex);
    });
});
