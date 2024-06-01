// src/components/CommunityPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import communityData from './communityData';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import '../assets/styles/CommunityPage.css';
const CommunityPage = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    // Encontrar a comunidade com base no id
    const selectedCommunity = communityData.find((community) => community.id === communityId);
    setCommunity(selectedCommunity);
  }, [communityId]);

  if (!community) {
    return <div>Carregando...</div>;
  }

  const { name, image, description, members, posts } = community;

  return (
    <div className="community-page">
      {window.location.pathname !== "/" && (  // Check if path is not root
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
      )}
      <div className="community-header">
        <img src={image} alt={name} />
        <h1>{name}</h1>
      </div>
      <div className="community-sections"> {/* New section for tabs */}
        <ul>  {/* Unordered list for tabs */}
          <li><a href="/Avisos">Avisos</a></li>
          <li><a href="/Geral">Geral</a></li>
          <li><a href="/Arquivos">Arquivos</a></li>
        </ul>
      </div>
      <div className="community-content">
        {description && <p>{description}</p>}
        {members && <p>Membros: {members}</p>}
        {posts && <PostList posts={posts} />}
      </div>
    </div>
  );
};

export default CommunityPage;

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <div className="post">
      <p className="post-author">{post.username}</p>
      <p className="post-content">{post.mensagem}</p>
      <p className="post-date">{new Date(post.data_hora).toLocaleString()}</p>
    </div>
  );
};
