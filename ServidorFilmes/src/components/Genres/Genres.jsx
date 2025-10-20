import React from 'react';
import './Genres.css';

function Genres() {
  const genres = [
    'Ação',
    'Drama',
    'Comédia',
    'Terror',
    'Ficção Científica',
    'Romance',
    'Aventura',
    'Suspense',
    'Documentário',
    'Animação'
  ];

  return (
    <section className="genres-section">
      <h2 className="genres-title">Explorar por Gênero</h2>
      <div className="genres-container">
        {genres.map((genre, index) => (
          <button key={index} className="genre-button">
            {genre}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Genres;
