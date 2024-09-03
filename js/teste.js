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

$(document).ready(function(){
    var videos = [
        "Eh7XY7VlfAM?si=NFHHIpFpSDRa_w6A", // Vídeo 1
        "H-0AlAN1VRY?si=oKDSaqJwd-f7loeb", // Vídeo 2
        "tX-jJm0Pl0Q?si=TKB-J69xbp3r_fbz"  // Vídeo 3
    ];
    var currentIndex = 0;

    function updateVideo(index) {
        $("#youtubeVideo").attr("src", "https://www.youtube.com/embed/" + videos[index]);
    }

    $("#prox").click(function(){
        if (currentIndex < videos.length - 1) {
            currentIndex++;
            updateVideo(currentIndex);
        }
    });

    $("#voltar").click(function(){
        if (currentIndex > 0) {
            currentIndex--;
            updateVideo(currentIndex);
        }
    });
});
