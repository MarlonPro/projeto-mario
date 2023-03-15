/*  

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, deve abrir a modal com o video do trailer 

OBJETIVO 2 - quando o usuário clicar no X deve fechar a modal

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, deve abrir a modal com o video do trailer 
    passo 1 - dar um jeito de pegar um elemento que representa o botão na tela usando js
    passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    passo 3 - dar um jeito de pegar o elemento da modal no js
    passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X deve fechar a modal
    passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    passo 2 - dar um jeito de identificar quando o usuário clicar no X
    passo 3 - fechar a modal
*/
// OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, deve abrir a modal com o video do trailer 

// passo 1 - dar um jeito de pegar um elemento que representa o botão na tela usando js
const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;

//passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener('click', () => {
    //passo 4 - abrir a modal na tela
    modal.classList.add('aberto');
    video.setAttribute('src', linkDoVideo);

});

//passo 3 - dar um jeito de pegar o elemento da modal no js (coluna 23)


// OBJETIVO 2 - quando o usuário clicar no X deve fechar a modal

// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector('.fechar-modal');

// passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener('click', () => {
    // passo 3 - fechar a modal
    modal.classList.remove('aberto');
    video.setAttribute('src', '');
});







