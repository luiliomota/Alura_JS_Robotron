const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const imagem = document.querySelector(".robotron").querySelector(".robo");
const cores = document.querySelectorAll("[data-cor]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }

}

controle.forEach( (elemento) => {

    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    });
});

cores.forEach( (elemento) => {
    elemento.addEventListener( "click", (evento) => {
        alteraCor (evento.target.dataset.cor);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");
    if (operacao === "+")
        peca.value = parseInt(peca.value) + 1;
    else if (operacao === "-")
        peca.value = parseInt(peca.value) - 1;
}

function atualizaEstatistica(peca){
    console.log(pecas[peca]);

    estatistica.forEach( (elemento) => {
        console.log(elemento.dataset.estatistica);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}

function alteraCor (cor) {
    imagem.attributes["src"].textContent = "img/robotron-" + cor + ".png";
}
