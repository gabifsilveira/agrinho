document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const scene = document.getElementById("scene");
    const background = document.getElementById("background");
    const campoAudio = document.getElementById("campoAudio");
    const cidadeAudio = document.getElementById("cidadeAudio");

    let isCidade = false; // Inicia no campo

    // Função para alternar entre o campo e a cidade
    toggleButton.addEventListener("click", function () {
        if (isCidade) {
            // Troca para o campo
            background.src = "imagens/campo.jpg";
            scene.style.backgroundImage = "url('imagens/campo.jpg')";
            campoAudio.play();
            cidadeAudio.pause();
            toggleButton.textContent = "Mudar para Cidade";
        } else {
            // Troca para a cidade
            background.src = "imagens/cidade.jpg";
            scene.style.backgroundImage = "url('imagens/cidade.jpg')";
            cidadeAudio.play();
            campoAudio.pause();
            toggleButton.textContent = "Mudar para Campo";
        }

        isCidade = !isCidade;
    });

    // Inicializa com som do campo
    campoAudio.play();
});
