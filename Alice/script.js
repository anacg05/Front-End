
// --- NOVO SCRIPT PARA LIVRO INTERATIVO ---

// Elementos principais
const paginaEsquerda = document.getElementById('pagina-esquerda');
const paginaDireita = document.getElementById('pagina-direita');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const numLetrasInput = document.getElementById('num-letras');
const destacarBtn = document.getElementById('destacar-btn');
const contagemPalavras = document.getElementById('contagem-palavras');
const palavrasRepetidas = document.getElementById('palavras-repetidas');

// Exemplo de texto dos capítulos (substitua pelo seu texto real)
const capitulos = [
  `Alice estava começando a ficar muito cansada de estar sentada ao lado de sua irmã no barranco e de não ter nada para fazer...`,
  `De repente, um Coelho Branco de olhos cor-de-rosa passou correndo perto dela...`,
  // Adicione mais páginas conforme necessário
];

// Configuração de páginas (duas por vez)
let paginaAtual = 0;

// Cores da API (exemplo)
let coresApi = ["#FFD93D", "#A7D8FF", "#4A90E2"];

// Função para buscar cores da API
async function buscarCoresApi() {
  try {
    // Exemplo de chamada (substitua pela URL real da API)
    const res = await fetch('https://api-colors.example.com/colors');
    const data = await res.json();
    if (Array.isArray(data.colors)) {
      coresApi = data.colors;
    }
  } catch (e) {
    // Se falhar, usa as cores padrão
  }
}

// Função para exibir páginas
function exibirPaginas() {
  paginaEsquerda.innerHTML = `<p>${capitulos[paginaAtual] || ''}</p>`;
  paginaDireita.innerHTML = `<p>${capitulos[paginaAtual+1] || ''}</p>`;
}

// Navegação
btnPrev.addEventListener('click', () => {
  if (paginaAtual > 0) {
    paginaAtual -= 2;
    exibirPaginas();
    limparDestaques();
  }
});
btnNext.addEventListener('click', () => {
  if (paginaAtual + 2 < capitulos.length) {
    paginaAtual += 2;
    exibirPaginas();
    limparDestaques();
  }
});

// Destacar palavras com X letras
function destacarPalavras() {
  limparDestaques();
  const num = parseInt(numLetrasInput.value);
  let totalCount = 0;
  const wordMap = {};
  [paginaEsquerda, paginaDireita].forEach(pagina => {
    let texto = pagina.textContent;
    const palavras = texto.split(/\s+/);
    const novasPalavras = palavras.map(word => {
      let cleanWord = word.replace(/[.,!?;:()]/g,"");
      if(cleanWord.length === num) {
        totalCount++;
        // Usa cor da API
        return `<span style="background-color:${coresApi[totalCount%coresApi.length]}; border-radius:4px;">${word}</span>`;
      }
      // Conta repetições
      const lw = cleanWord.toLowerCase();
      if(lw) wordMap[lw] = (wordMap[lw]||0)+1;
      return word;
    });
    pagina.innerHTML = `<p>${novasPalavras.join(' ')}</p>`;
  });
  contagemPalavras.textContent = `Palavras com ${num} letras: ${totalCount}`;
  const repetidas = Object.entries(wordMap).filter(([w,c])=>c>1).map(([w,c])=>`${w} (${c})`).join(', ');
  palavrasRepetidas.textContent = `Palavras repetidas: ${repetidas || 'Nenhuma'}`;
}

// Limpar destaques
function limparDestaques() {
  [paginaEsquerda, paginaDireita].forEach(pagina => {
    let texto = pagina.textContent;
    pagina.innerHTML = `<p>${texto}</p>`;
  });
  contagemPalavras.textContent = `Palavras com X letras: 0`;
  palavrasRepetidas.textContent = `Palavras repetidas: Nenhuma`;
}

// Evento de destaque
destacarBtn.addEventListener('click', destacarPalavras);

// Inicialização
buscarCoresApi();
exibirPaginas();
