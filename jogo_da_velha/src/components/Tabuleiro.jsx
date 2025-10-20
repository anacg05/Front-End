import Quadrado from "./Quadrado";
import { useState } from "react";
import "../App.css";

function Tabuleiro() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  const [xProximo, setXProximo] = useState(true);

  function handleClick(i) {
    // impede clicar em quadrados ocupados ou se já houver vencedor
    if (quadrados[i] || vencedor(quadrados)) {
      return;
    }

    const nextQuadrados = quadrados.slice();
    nextQuadrados[i] = xProximo ? "X" : "O";

    setQuadrados(nextQuadrados);
    setXProximo(!xProximo);
  }

  function resetJogo() {
    setQuadrados(Array(9).fill(null));
    setXProximo(true);
  }

  const ganhador = vencedor(quadrados);
  let status;
  let statusClass = "";

  if (ganhador) {
    status = `Vencedor: ${ganhador}`;
    statusClass = ganhador === "X" ? "status-x" : "status-o";
  } else {
    status = `Próximo jogador: ${xProximo ? "X" : "O"}`;
    statusClass = xProximo ? "status-x" : "status-o";
  }

  return (
    <div className="game-container">
      <div className={`status ${statusClass}`}>{status}</div>
      <div className="tabuleiro">
        {quadrados.map((valor, i) => (
          <div key={i} className="quadrado">
            <Quadrado value={valor} onQuadrado={() => handleClick(i)} />
          </div>
        ))}
      </div>
      <button onClick={resetJogo} className="botao-reiniciar">
        Reiniciar Jogo
      </button>
    </div>
  );
}

function vencedor(quadrados) {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
      return quadrados[a];
    }
  }

  return null;
}

export default Tabuleiro;
