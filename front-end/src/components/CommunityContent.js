//src/components/CommunityContent.js
import React from 'react';

const CommunityContent = ({ community }) => {
  // Renderizar o conteúdo específico da comunidade aqui (posts, eventos, etc.)
  return (
    <div>
      {/* Exibir o conteúdo da comunidade selecionada */}
      <p>Posts da comunidade: {community.posts.map((post) => post.title)}</p>
      <p>Eventos das comunidades: {community.events.map((event) => event.name)}</p>
      {/* ... outros elementos de conteúdo da comunidade ... */}
    </div>
  );
};

export default CommunityContent;
