const controle = document.querySelectorAll("[data-controle]"); //todo: Usando data- posso desaclopar o js do html em sim=
const estatisticas = document.querySelectorAll("[data-estatistica]")
//? colocando as estatisticas do robo
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
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



console.log(controle)

// agora vamos manipular esse array de controle com foreach(usado principalmente para arrays
controle.forEach((elemento) => { // estamos pegando o elemento que está sendo passado e iremos adicionar um evento a cada um deles

    elemento.addEventListener("click", (evento) => { //pegando a onde está o evento

        //target trás qual é o id ou a classe por exmeplo e pelo textcontent pegamos o conteudo
        // como tiramos em si a necessidade de ser chamado o html, podemos pegar pelo valor do data, usando dataset
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //Passando o conteudo e qual div é a pai do botão
        atualizaEstatisticas(evento.target.dataset.peca); // pegando qual a peça
    })
});



function manipulaDados(operacao, controle) {
    //? Em vez de procurar dentro do documento, pode se mandar ele procurar dentro de controle

    const peca = controle.querySelector("[data-contador]"); //passando a onde esta a peça

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    }
}


//  qual peça foi a clicada?
function atualizaEstatisticas(peca){
    console.log(pecas[peca]); // pegando os valores do item e descendo no nivel da estatistica

    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatistica)
        //modificando o elemento / pegando o valor em inteiro / na posição peca escolhida no item elemenot.dataset.estatistica
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];

    })
}



