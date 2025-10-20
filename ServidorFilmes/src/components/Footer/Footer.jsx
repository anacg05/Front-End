import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
          <span className="footer-logo-text">MovieHub</span>
        </div>
        <p className="footer-description">Gerenciador de filmes - Criado por Ana Clara Grizotto</p>

        <div className="footer-links">
          <a href="#" className="footer-link">Sobre</a>
          <a href="#" className="footer-link">Contato</a>
          <a href="#" className="footer-link">Termos de Uso</a>
          <a href="#" className="footer-link">Privacidade</a>
        </div>

        <p className="footer-copyright">© 2024 MovieHub. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
