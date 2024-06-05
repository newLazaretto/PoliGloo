// src/components/Explore.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommunityData from './communityData';
import '../assets/styles/Explore.css';
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCommunities, setFilteredCommunities] = useState([]);

  useEffect(() => {
    setFilteredCommunities(Object.keys(CommunityData)
      .sort((a, b) => CommunityData[b].members.length - CommunityData[a].members.length));
  }, []);

  const handleSearch = () => {
    const filtered = Object.keys(CommunityData)
      .filter((communityId) =>
        CommunityData[communityId].name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => CommunityData[b].members.length - CommunityData[a].members.length);

    setFilteredCommunities(filtered);
  };

  const favoriteCommunityId = Object.keys(CommunityData)
    .sort((a, b) => CommunityData[b].members.length - CommunityData[a].members.length)[0];
  const favoriteCommunity = favoriteCommunityId && CommunityData[favoriteCommunityId];

  const recentPosts = Object.values(CommunityData)
    .flatMap(community => community.posts)
    .sort((a, b) => new Date(b.data_hora) - new Date(a.data_hora));

  const recentAvisos = Object.values(CommunityData)
    .flatMap(community => community.avisos)
    .sort((a, b) => b.id - a.id);

  return (
    <div className="explore">
      <h1>Explorar</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar comunidades..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {favoriteCommunity && (
        <div className="favorite-community">
          <h2>Iglu mais aconchegante <span className="star" role="img" aria-label="star">⭐</span></h2>
          <div className="community-details">
            <img src={favoriteCommunity.image} alt={favoriteCommunity.name} />
            <div>
              <h3>{favoriteCommunity.name}</h3>
              <p>Membros: {favoriteCommunity.members.length}</p>
              <Link to={`/${favoriteCommunityId}`}>Ver Comunidade</Link>
            </div>
          </div>
        </div>
      )}

      <div className="community-list">
        <h2>Comunidades</h2>
        <ul>
          {filteredCommunities.map(communityId => (
            <li key={communityId}>
              <Link to={`/${communityId}`}>
                <img src={CommunityData[communityId].image} alt={CommunityData[communityId].name} />
                <h3>{CommunityData[communityId].name}</h3>
                <p>Membros: {CommunityData[communityId].members.length}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="recent-posts">
        <h2>Posts Recentes</h2>
        <ul>
          {recentPosts.slice(0, 5).map(post => (
            <li key={post.id}>
              <div className="post">
                <h3>{post.username}</h3>
                <p>{post.mensagem}</p>
                <p>{new Date(post.data_hora).toLocaleString()}</p>
                <Link to={`/${Object.keys(CommunityData).find(id => CommunityData[id].posts.includes(post))}`}>Ver Comunidade</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="recent-avisos">
        <h2>Avisos Recentes</h2>
        <ul>
          {recentAvisos.slice(0, 5).map(aviso => (
            <li key={aviso.id}>
              <div className="aviso">
                <h3>{aviso.title}</h3>
                <p>{aviso.content}</p>
                <Link to={`/${Object.keys(CommunityData).find(id => CommunityData[id].avisos.includes(aviso))}`}>Ver Comunidade</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
