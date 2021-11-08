let selecionados = []
let paresCertos = []
let numeroCartas = 0
let jogadas = 0
function carregarPagina() {
    jogadas = 0
    numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Escolha um numero par entre 4 e 14)"))
    if ((numeroCartas<4 || numeroCartas>14 || numeroCartas%2!==0)) {
        carregarPagina()
    }
    else {
        let parrots = []
        if (numeroCartas >= 4) {
            parrots.push("<img src='Assets/bobrossparrot.gif'>")
            parrots.push("<img src='Assets/bobrossparrot.gif'>")
            parrots.push("<img src='Assets/explodyparrot.gif'>")
            parrots.push("<img src='Assets/explodyparrot.gif'>")
        }
        if (numeroCartas >=6) {
            parrots.push("<img src='Assets/fiestaparrot.gif'>")
            parrots.push("<img src='Assets/fiestaparrot.gif'>")
        }
        if (numeroCartas >=8) {
            parrots.push("<img src='Assets/metalparrot.gif'>")
            parrots.push("<img src='Assets/metalparrot.gif'>")
        }
        if (numeroCartas >=10) {
            parrots.push("<img src='Assets/revertitparrot.gif'>")
            parrots.push("<img src='Assets/revertitparrot.gif'>")
        }
        if (numeroCartas >=12) {
            parrots.push("<img src='Assets/tripletsparrot.gif'>")
            parrots.push("<img src='Assets/tripletsparrot.gif'>")
        }
        if (numeroCartas >=14) {
            parrots.push("<img src='Assets/unicornparrot.gif'>")
            parrots.push("<img src='Assets/unicornparrot.gif'>")
        }
        parrots.sort(comparador)
        const board = document.querySelector(".jogo")
        board.innerHTML = ""
        for (let i=0;i<numeroCartas;i++) {
            board.innerHTML += `
            <div class="card" onclick="virarCarta(this)" data-identifier="card">
                <div class="front-face face" data-identifier="front-face">
                    <img src="Assets/front.png">
                </div>
                <div class="back-face face" data-identifier="back-face">
                    ${parrots[i]}
                </div>
            </div>
            `
        }
    }
}
function virarCarta(carta) {
    jogadas++
    carta.classList.add("selecionado")
    selecionados = document.querySelectorAll(".selecionado")
    if (selecionados.length === 2) {
        if (selecionados[0].querySelector(".back-face").innerHTML !== selecionados[1].querySelector(".back-face").innerHTML) {
            setTimeout(desvirar, 1000)
        }
        else if (selecionados[0].querySelector(".back-face").innerHTML === selecionados[1].querySelector(".back-face").innerHTML) {
            for (let i=0;i<selecionados.length;i++) {
                selecionados[i].classList.remove("selecionado")
            }
            for (let i=0;i<selecionados.length;i++) {
                selecionados[i].classList.add("acertado")
                paresCertos = document.querySelectorAll(".acertado")
            }
        }
    }
    if (paresCertos.length === numeroCartas) {
        setTimeout(final, 500)
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}
function desvirar() {
    for (let i=0;i<selecionados.length;i++) {
        selecionados[i].classList.remove("selecionado")
    }
}
function final() {
    alert(`Você ganhou em ${jogadas} jogadas!`)
    let reiniciar = prompt("Você quer jogar de novo? sim ou nao")
    if (reiniciar === "sim") {
        carregarPagina()
    }
}
carregarPagina()