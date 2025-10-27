import React from 'react';
import './RecentMovies.css';

// IMAGENS
import Interestelar from '../../assets/interestelar.jpg';
import Rio from '../../assets/rio.jpg';
import Invocacao from '../../assets/invocacao.jpg';

function RecentMovies() {
  const movies = [
    {
      title: 'Interestelar',
      year: 2014,
      genres: 'Drama, Ficção Científica',
      synopsis: 'A humanidade enfrenta um futuro incerto, pois os recursos naturais da Terra estão esgotando.',
      poster: Interestelar
    },
    {
      title: 'Rio',
      year: 2011,
      genres: 'Animação, Aventura, Comédia',
      synopsis: 'A arara Blu, que não sabe voar, viaja do Minnesota para o Rio de Janeiro para conhecer Jewel e salvar sua espécie.',
      poster: Rio
    },
    {
      title: 'Invocação do Mal',
      year: 2013,
      genres: 'Terror, Mistério',
      synopsis: 'os investigadores paranormais Ed e Lorraine Warren são chamados para ajudar a família Perron, que está enfrentando atividades assustadoras em sua fazenda.',
      poster: Invocacao
    }
  ];

  return (
    <section className="recent-section">
      <div className="recent-header">
        <h2 className="recent-title">Catálogo de Filmes</h2>
        <a href="#" className="see-all-link">
          Ver Todos
        </a>
      </div>

      <div className="recent-list">
        {movies.map((movie, index) => (
          <div key={index} className="recent-card">
            <div className="recent-poster">
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="recent-content">
              <h3 className="recent-movie-title">{movie.title}</h3>
              <p className="recent-meta">{movie.year} • {movie.genres}</p>
              <p className="recent-synopsis">{movie.synopsis}</p>
              <div className="recent-tags">
                {movie.genres.split(', ').map((genre, idx) => (
                  <span key={idx} className="genre-tag">{genre}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentMovies;
