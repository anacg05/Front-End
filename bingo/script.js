//-------------------------------------------------------------------------------------------
// ELEMENTOS DO DOM
const sortearBtn = document.getElementById("sortearBtn");
const numeroSorteadoEl = document.getElementById("numero-sorteado");
const barraProgresso = document.getElementById('barra-progresso');
const divHistorico = document.getElementById("numeros-historico");

// LISTAS DE NÚMEROS
let numerosDisponiveis = Array.from({ length: 75 }, (_, i) => i + 1);
let numerosSorteados = [];

//-------------------------------------------------------------------------------------------
// INICIALIZAÇÃO DA TABELA BINGO
function inicializarTabela() {
    const colunas = {
        B: [1, 15],
        I: [16, 30],
        N: [31, 45],
        G: [46, 60],
        O: [61, 75],
    };

    for (let letra in colunas) {
        const [inicio, fim] = colunas[letra];
        const colunaDiv = document.getElementById(`col-${letra}`);

        for (let i = inicio; i <= fim; i++) {
            const span = document.createElement("span");
            span.textContent = i;
            span.id = `num-${i}`;
            colunaDiv.appendChild(span);
        }
    }
}

//-------------------------------------------------------------------------------------------
// FUNÇÃO PARA PEGAR A LETRA DO NÚMERO
function getLetraDoNumero(numero) {
    if (numero >= 1 && numero <= 15) return "B";
    if (numero >= 16 && numero <= 30) return "I";
    if (numero >= 31 && numero <= 45) return "N";
    if (numero >= 46 && numero <= 60) return "G";
    if (numero >= 61 && numero <= 75) return "O";
    return "";
}

//-------------------------------------------------------------------------------------------
// FUNÇÃO DE SORTEIO
function sortearNumero() {
    if (numerosDisponiveis.length === 0) {
        alert("Todos os números já foram sorteados!");
        sortearBtn.disabled = true;
        return;
    }

    const index = Math.floor(Math.random() * numerosDisponiveis.length);
    const numero = numerosDisponiveis.splice(index, 1)[0];
    numerosSorteados.push(numero);

    const letra = getLetraDoNumero(numero);
    numeroSorteadoEl.textContent = `${letra}${numero}`;

    document.getElementById(`num-${numero}`).classList.add("sorteado");

    barraProgresso.value = 75 - numerosDisponiveis.length;

    atualizarHistorico();
}

//-------------------------------------------------------------------------------------------
// FUNÇÃO DE ATUALIZAÇÃO DO HISTÓRICO
function atualizarHistorico() {
    divHistorico.innerHTML = "";

    numerosSorteados.slice().reverse().forEach(n => {
        const letra = getLetraDoNumero(n);
        const bola = document.createElement("div");
        bola.className = "bola-historico";
        bola.textContent = `${letra}${n}`;
        divHistorico.appendChild(bola);
    });
}

//-------------------------------------------------------------------------------------------
// FUNÇÃO DE RESETAR JOGO
function resetarJogo() {
    numerosDisponiveis = Array.from({ length: 75 }, (_, i) => i + 1);
    numerosSorteados = [];
    document.querySelectorAll(".sorteado").forEach(span => {
        span.classList.remove("sorteado");
    });
    numeroSorteadoEl.textContent = "--";
    sortearBtn.disabled = false;
    barraProgresso.value = 0;
    divHistorico.innerHTML = "";

    alert("O bingo foi reiniciado!")
}


//-------------------------------------------------------------------------------------------
// EVENT LISTENER
sortearBtn.addEventListener("click", sortearNumero);
inicializarTabela();
