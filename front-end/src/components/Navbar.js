// src/components/Navbar.js
import React from 'react';
import '../assets/styles/Navbar.css';
// Recebendo toggleSection como prop
function Navbar({ toggleSection }) {
  return (
    <div className="navbar">
      {/* Chamando toggleSection com o valor apropriado ao ser clicado */}
      <button className="button-explore" onClick={() => toggleSection('explore')}>Explorar</button>
      <button className="button-communities" onClick={() => toggleSection('communities')}>Comunidades</button>
    </div>
  );
}

export default Navbar;
