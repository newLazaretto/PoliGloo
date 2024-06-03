import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import backLogo from '../assets/images/logo-voltar.png';
import userLogo from '../assets/images/perfil.png';
import sampleImage from '../assets/images/logo3.png'; // Substitua pelo caminho da sua imagem
import brickWallImage from '../assets/images/brick-wall.png'; // Substitua pelo caminho da sua imagem de fundo

function Navbar({ toggleSection }) {
  const [isImageVisible, setImageVisible] = useState(true);
  const [isBackgroundVisible, setBackgroundVisible] = useState(true);

  const handleButtonClick = (section) => {
    setImageVisible(false);
    setBackgroundVisible(false);
    toggleSection(section);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-back-button-container">
          <img
            src={backLogo}
            alt="Voltar"
            className="nav-back-button"
            onClick={() => handleButtonClick('communities')}
          />
        </div>
        <div className="nav-user-page">
          <img
            src={userLogo}
            alt="Usuário"
            className="nav-user-button"
            onClick={() => handleButtonClick('user')}
          />
        </div>
        <div className="nav-buttons">
          <button className="nav-button-explore" onClick={() => handleButtonClick('explore')}>Explorar</button>
          <button className="nav-button-communities" onClick={() => handleButtonClick('communities')}>Comunidades</button>
        </div>
      </div>
      {isBackgroundVisible && (
        <div className="background-container">
          <img src={brickWallImage} alt="Background" className="background-image" />
        </div>
      )}
      {isImageVisible && (
        <div className="image-container">
          <img src={sampleImage} alt="Sample" className="below-navbar-image" />
        </div>
      )}
    </>
  );
}

export default Navbar;
