const lgpdModal = new bootstrap.Modal('#lgpdModal', {
    backdrop: 'static',
    keyboard: false
});

// Se a sessão chamada fechouLgpd for diferente de sim, abra o Modal
// if(sessionStorage.getItem('fechouLgpd') != 'sim') {
//     lgpdModal.show();
// }

if(localStorage.getItem('fechouLgpd') != 'sim') {
    lgpdModal.show();
}

// Selecionando o botão
const btnLgpd = document.querySelector("#btnLgpd");

// Associando o evento de lick ao botão selecionado
btnLgpd.addEventListener('click', function() {
    // alert("Clicou");
    // sessionStorage.setItem('fechouLgpd', 'sim'); // Session Storage armazena a informação somente enquanto a aba estiver aberta
    localStorage.setItem('fechouLgpd', 'sim');
});