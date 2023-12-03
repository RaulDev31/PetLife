var elementosDuvida = document.querySelectorAll(".descricao")

elementosDuvida.forEach(function (descricao) {
    descricao.addEventListener('click', function () {
        descricao.classList.toggle("ativa")
    })
})