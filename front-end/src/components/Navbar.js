// src/components/Navbar.js
import React from 'react';
import '../assets/styles/Navbar.css';
import backLogo from '../assets/images/logo-voltar.png';
import userLogo from '../assets/images/perfil.png';


function Navbar({ toggleSection }) {
  return (
    <div className="navbar">
      <div className="nav-back-button-container">
        <img
          src={backLogo}
          alt="Voltar"
          className="nav-back-button"
          onClick={() => toggleSection('communities')}
        />
      </div>
      <div className="nav-user-page">
        <img
          src={userLogo}
          alt="Usuário"
          className="nav-user-button"
          onClick={() => toggleSection('user')}
        />
      </div>
      <div className="nav-buttons">
        <button className="nav-button-explore" onClick={() => toggleSection('explore')}>Explorar</button>
        <button className="nav-button-communities" onClick={() => toggleSection('communities')}>Comunidades</button>
      </div>
    </div>
  );
}

export default Navbar;
