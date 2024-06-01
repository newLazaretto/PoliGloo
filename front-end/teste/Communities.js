import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
import './Comunidades.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommunityContent from './CommunityContent';

const communities = [
  { id: "Avisos", name: 'AVISOS', members: 10, description: 'Comunidade de avisos importantes.', posts: [], events: [] },
  { id: "Compiladores", name: 'Compiladores', members: 25, description: 'Comunidade de discussão sobre compiladores.', posts: [], events: [] },
  { id: "RedesNeurais", name: 'Redes Neurais', members: 30, description: 'Comunidade de estudo sobre redes neurais.', posts: [], events: [] },
  // Adicione mais comunidades aqui
];


const Communities = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const navigate = useNavigate();

  const handleCommunityClick = (community) => {
    setSelectedCommunity(community);
    navigate(`/${community.id}`);
  };

  return (
    <div className="communities">
      <aside className="sidebar-left">
        <ul>
          {communities.map((community) => (
            <li key={community.id}>
              <button onClick={() => handleCommunityClick(community)}>
                {community.name} ({community.members}) <FaPlusSquare />
              </button>
              <p>{community.description}</p>
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        {selectedCommunity && (
          <>
            <h2>{selectedCommunity.name}</h2>
            {/* Renderizar o conteúdo da comunidade usando o 'element' */}
            <CommunityContent community={selectedCommunity} />
          </>
        )}
      </main>
    </div>
  );
};

export default Communities;

