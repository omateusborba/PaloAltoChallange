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
    document.getElementById("gallery").style.display = "none";
}

