import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <h1 className="hero-title">DESCUBRA E GERENCIE</h1>
        <h2 className="hero-subtitle">SUA COLEÇÃO DE FILMES</h2>

        <div className="hero-buttons"> 
          
          <Link to="/listarfilmes">
            <button className="btns btn-primary">
              Exibir Filmes
            </button>
          </Link>

          <Link to="/adicionarfilme">
            <button className="btns btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Adicionar Filme
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;
