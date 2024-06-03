import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import '../assets/styles/CommunityPage.css';
import communityData from './CommunityData';
import backLogo from '../assets/images/logo-voltar.png';
import userLogo from '../assets/images/perfil.png';

const CommunityPage = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const selectedCommunity = communityData.find((community) => community.id === communityId);
    setCommunity(selectedCommunity);
    // Simulação de fetch de posts
    if (selectedCommunity) {
      setPosts(selectedCommunity.posts || []);
    }
  }, [communityId]);

  if (!community) {
    return <div>Carregando...</div>;
  }

  const { name, image, members } = community;

  return (
    <div className="community-page">
      <div className="community">
        <img
          src={backLogo}
          alt="Voltar"
          className="community-back-button"
          onClick={() => navigate('/communities')}
        />
        <div className="community-buttons">
          <button onClick={() => navigate(`/${community.id}/Avisos`)}>Avisos</button>
          <button onClick={() => navigate(`/${community.id}/Geral`)}>Geral</button>
          <button onClick={() => navigate(`/${community.id}/Arquivos`)}>Arquivos</button>
        </div>
        <img
          src={userLogo}
          alt="Usuário"
          className="community-user-button"
          onClick={() => navigate('/user')}
        />
      </div>
      <div className="sidebar">
        <div className="community-info">
          <img src={image} alt={name} className="community-image" />
          <h2 className="community-name">{name}</h2>
          <p className="community-members">{members.length} membros</p>
        </div>
        
        {/*
      <div className="member-list"> 
        {members.map((member) => (
          <div key={member.id} className="member">
            <img src={member.avatar} alt={member.name} className="member-avatar" />
            <p className="member-name">{member.name}</p>
          </div>
        ))} 
      </div>
      */}
        
        
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/:communityId/Avisos" element={<Avisos />} />
          <Route path="/:communityId/Geral" element={<Geral posts={posts} />} />
          <Route path="/:communityId/Arquivos" element={<Arquivos />} />
        </Routes>
      </div>
    </div>
  );
};

const Avisos = () => {
  // Simulação de fetch de avisos
  const avisos = [
    { id: 1, title: "Aviso 1", content: "Conteúdo do aviso 1" },
    { id: 2, title: "Aviso 2", content: "Conteúdo do aviso 2" },
  ];

  return (
    <div className="avisos">
      <h2>Avisos</h2>
      {avisos.map((aviso) => (
        <div key={aviso.id} className="aviso">
          <h3>{aviso.title}</h3>
          <p>{aviso.content}</p>
        </div>
      ))}
    </div>
  );
};

const Geral = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const Arquivos = () => {
  // Simulação de fetch de arquivos
  const arquivos = [
    { id: 1, name: "Arquivo 1", url: "/path/to/arquivo1" },
    { id: 2, name: "Arquivo 2", url: "/path/to/arquivo2" },
  ];

  return (
    <div className="arquivos">
      <h2>Arquivos</h2>
      {arquivos.map((arquivo) => (
        <div key={arquivo.id} className="arquivo">
          <a href={arquivo.url} target="_blank" rel="noopener noreferrer">{arquivo.name}</a>
        </div>
      ))}
    </div>
  );
};

const Post = ({ post }) => (
  <div className="post">
    <p className="post-author">{post.username}</p>
    <p className="post-content">{post.mensagem}</p>
    <p className="post-date">{new Date(post.data_hora).toLocaleString()}</p>
    <button className="reply-button">Responder</button>
  </div>
);

export default CommunityPage;
