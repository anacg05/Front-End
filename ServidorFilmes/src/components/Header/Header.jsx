import React from 'react';
import './Header.css';
import Icon from '../../assets/icon.png'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <img src={Icon} alt='Icone caclete'/>
            <span className="logo-text">CineGriz</span>
          </div>

          <div className="search-wrapper">
            <div className="search-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Buscar filmes..."
                className="search-input"
              />
            </div>
          </div>

          <nav className="nav">
            <a href="#" className="nav-link active">Início</a>
            <a href="#" className="nav-link">Filmes</a>
            <button className="login-button">
              <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Login</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
