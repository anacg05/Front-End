import React, { useRef } from 'react';
import Header from '../../components/Header/Header.jsx';
import './ListarFilmes.css';

export default function ListarFilmes() {
  const filmesPorGenero = {
    'Ficção Científica': [
      { titulo: 'Interestelar', ano: 2014, rating: 8.6, cor: 'linear-gradient(to bottom right, #2563eb, #1e3a8a)' },
      { titulo: 'Duna', ano: 2021, rating: 8.1, cor: 'linear-gradient(to bottom right, #a16207, #c2410c)' },
    ],
    'Fantasia': [
      { titulo: 'O Senhor dos Anéis', ano: 2001, rating: 9.0, cor: 'linear-gradient(to bottom right, #14532d, #065f46)' },
      { titulo: 'Harry Potter', ano: 2001, rating: 7.8, cor: 'linear-gradient(to bottom right, #6b21a8, #581c87)' },
    ],
    'Drama': [
      { titulo: 'Parasita', ano: 2019, rating: 8.6, cor: 'linear-gradient(to bottom right, #111827, #1f2937)' },
      { titulo: 'Oppenheimer', ano: 2023, rating: 8.9, cor: 'linear-gradient(to bottom right, #b45309, #92400e)' },
    ],
  };

  const scrollRefs = useRef({});

  const scroll = (genero, direcao) => {
    const container = scrollRefs.current[genero];
    if (container) {
      const scrollAmount = direcao === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="listar-container">
      <Header />
      <main className="listar-content">
        {Object.entries(filmesPorGenero).map(([genero, filmes]) => (
          <section key={genero} className="genre-section">
            <div className="genre-header">
              <h2 className="genre-title">{genero}</h2>
            </div>

            <div className="carousel-wrapper">
              <button className="arrow-btn left" onClick={() => scroll(genero, 'left')}>&lt;</button>
              <div className="movie-row" ref={(el) => (scrollRefs.current[genero] = el)}>
                {filmes.map((filme, i) => (
                  <div key={i} className="movie-card" style={{ background: filme.cor }}>
                    <div className="movie-overlay">
                      <h3>{filme.titulo}</h3>
                      <p>{filme.ano}</p>
                      <span>⭐ {filme.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="arrow-btn right" onClick={() => scroll(genero, 'right')}>&gt;</button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
