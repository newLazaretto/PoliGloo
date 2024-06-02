import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CommunityPage.css';
import communityData from './communityData';

const CommunityPage = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const selectedCommunity = communityData.find((community) => community.id === communityId);
      setCommunity(selectedCommunity);
    }, [communityId]);

  if (!community) {
    return <div>Carregando...</div>;
  }

  const { name, image, members} = community;

  return (
    <div className="community-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <div className="sidebar">
        <h2>{name}</h2>
        
      </div>
      <div className="main-content">
        <div className="community-header">
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
        <div className="community-sections">
          <ul>
          <button onClick={() => navigate(`/${community.id}/Avisos`)}>Avisos</button>
          <button onClick={() => navigate(`/${community.id}/Geral`)}>Geral</button>
          <button onClick={() => navigate(`/${community.id}/Arquivos`)}>Arquivos</button>
          </ul>
        </div>
        <div className="community-content">
          { <PostList posts={posts} />}
        </div>
      </div>
    </div>
  );
};

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
      <button className="reply-button">Responder</button>
    </div>
  );
};

export default CommunityPage;
