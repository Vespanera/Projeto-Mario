/*
N°1 - Quando o usuario clicar abrir treiler, devemos abrir o modal com o vídeo do trailer.
N°2 - Quando o usuario clicar fechar o trailer, devemos fechar o modal.
*/

console.log(document);

console.log(document.querySelector(".botao"));

const botao = document.querySelector(".botao");

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto")
}

botao.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", "");
})

