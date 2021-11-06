function carregarPagina() {
    let numeroCartas = prompt("Com quantas cartas você quer jogar? (Escolha um numero par entre 4 e 14)")
    if ((numeroCartas<4 || numeroCartas>14 || numeroCartas%2!==0)) {
        carregarPagina()
    }
    else {
        const board = document.querySelector(".jogo")
        board.innerHTML = ""
        for (let i=0;i<numeroCartas;i++) {
            board.innerHTML += `
            <div class="card">
                <div class="front-face face">
                    <img src="Assets/front.png">
                </div>
                <div class="back-face face">
                    Verso
                </div>
            </div>
            `
        }
    }
}
carregarPagina()