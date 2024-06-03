import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import '../assets/styles/CommunityPage.css';
import CommunityData from './communityData';

const CommunityPage = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [avisos, setAvisos] = useState([]);
  const [arquivos, setArquivos] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newAvisoTitle, setNewAvisoTitle] = useState('');
  const [newAvisoContent, setNewAvisoContent] = useState('');
  const [newArquivoName, setNewArquivoName] = useState('');
  const [newArquivoUrl, setNewArquivoUrl] = useState('');

  /*
  useEffect(() => {
    fetch(`/${communityId}`)
      .then(response => response.json())
      .then(data => {
        setCommunity(data);
        setPosts(data.posts || []);
        setAvisos(data.avisos || []);
        setArquivos(data.arquivos || []);
      })
      .catch(error => console.error('Error fetching community:', error));
  }, [communityId]);
*/
  /*
  useEffect(() => {
      const selectedCommunity = communityData.find((community) => community.id === communityId);
      setCommunity(selectedCommunity);
      // Simulação de fetch de posts
      if (selectedCommunity) {
        setPosts(selectedCommunity.posts || []);
      }
    }, [communityId]);
  */
  useEffect(() => {
    const selectedCommunity = CommunityData[communityId];
    if (selectedCommunity) {
      setCommunity(selectedCommunity);
      setPosts(selectedCommunity.posts || []);
      setAvisos(selectedCommunity.avisos || []);
      setArquivos(selectedCommunity.arquivos || []);
    }
  }, [communityId]);

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const newPostData = {
      id: posts.length + 1,
      username: 'currentUser',
      mensagem: newPost,
      data_hora: new Date().toISOString()
    };
    setPosts([...posts, newPostData]);
    setNewPost('');

    // Envie a requisição para criar o post no backend, se necessário
    // fetch('/create-post', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ nomeComunidade: communityId, username: 'currentUser', mensagem: newPost })
    // })
    // .then(response => {
    //   if (response.ok) {
    //     // Atualize os posts após criar o post no backend, se necessário
    //   } else {
    //     console.error('Failed to create post');
    //   }
    // })
    // .catch(error => console.error('Error creating post:', error));
  };

  const handleNewAvisoSubmit = (e) => {
    e.preventDefault();
    const newAvisoData = {
      id: avisos.length + 1,
      title: newAvisoTitle,
      content: newAvisoContent
    };
    setAvisos([...avisos, newAvisoData]);
    setNewAvisoTitle('');
    setNewAvisoContent('');

    // Envie a requisição para criar o aviso no backend, se necessário
  };

  const handleNewArquivoSubmit = (e) => {
    e.preventDefault();
    const newArquivoData = {
      id: arquivos.length + 1,
      name: newArquivoName,
      url: newArquivoUrl
    };
    setArquivos([...arquivos, newArquivoData]);
    setNewArquivoName('');
    setNewArquivoUrl('');

    // Envie a requisição para criar o arquivo no backend, se necessário
  };


  if (!community) {
    return <div>Carregando...</div>;
  }

  const { name, image, members } = community;

  return (
    <div className="community-page">
      <div className="community">
        <img
          src="/assets/images/logo-voltar.png"
          alt="Voltar"
          className="community-back-button"
          onClick={() => navigate('/')}
        />
        <div className="community-buttons">
          <button onClick={() => navigate(`/${communityId}/Avisos`)}>Avisos</button>
          <button onClick={() => navigate(`/${communityId}/Geral`)}>Geral</button>
          <button onClick={() => navigate(`/${communityId}/Arquivos`)}>Arquivos</button>

        </div>
        <img
          src="/assets/images/perfil.png"
          alt="Usuário"
          className="community-user-button"
          onClick={() => navigate('/user')}
        />
      </div>
      <div className="sidebar">
        <div className="community-info">
          <img src={image} alt={''} className="community-image" />
          <h2 className="community-name">{name}</h2>
          <p className="community-members">{members.length} membros</p>
        </div>
        <div className="member-list">
          {members.map((member) => (
            <div key={member.username} className="member">
              <img src="/assets/images/perfil.png" alt={member.username} className="member-avatar" />
              <p className="member-name">{member.username}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/:communityId/Avisos" element={<Avisos avisos={avisos} onNewAvisoSubmit={handleNewAvisoSubmit} newAvisoTitle={newAvisoTitle} setNewAvisoTitle={setNewAvisoTitle} newAvisoContent={newAvisoContent} setNewAvisoContent={setNewAvisoContent} />} />
          <Route path="/:communityId/Geral" element={<Geral posts={posts} onNewPostSubmit={handleNewPostSubmit} newPost={newPost} setNewPost={setNewPost} />} />
          <Route path="/:communityId/Arquivos" element={<Arquivos arquivos={arquivos} onNewArquivoSubmit={handleNewArquivoSubmit} newArquivoName={newArquivoName} setNewArquivoName={setNewArquivoName} newArquivoUrl={newArquivoUrl} setNewArquivoUrl={setNewArquivoUrl} />} />
        </Routes>
      </div>
    </div>
  );
};
const Avisos = ({ avisos, onNewAvisoSubmit, newAvisoTitle, setNewAvisoTitle, newAvisoContent, setNewAvisoContent }) => {
  return (
    <div className="avisos">
      <h2>Avisos</h2>
      {avisos.map((aviso) => (
        <div key={aviso.id} className="aviso">
          <h3>{aviso.title}</h3>
          <p>{aviso.content}</p>
        </div>
      ))}
      <form onSubmit={onNewAvisoSubmit}>
        <input
          type="text"
          placeholder="Título do aviso"
          value={newAvisoTitle}
          onChange={(e) => setNewAvisoTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Conteúdo do aviso"
          value={newAvisoContent}
          onChange={(e) => setNewAvisoContent(e.target.value)}
          required
        />
        <button type="submit">Criar Aviso</button>
      </form>
    </div>
  );
};

const Geral = ({ posts, onNewPostSubmit, newPost, setNewPost }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <form onSubmit={onNewPostSubmit}>
        <textarea
          placeholder="Escreva uma nova postagem"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          required
        />
        <button type="submit">Criar Postagem</button>
      </form>
    </div>
  );
};

const Arquivos = ({ arquivos, onNewArquivoSubmit, newArquivoName, setNewArquivoName, newArquivoUrl, setNewArquivoUrl }) => {
  return (
    <div className="arquivos">
      <h2>Arquivos</h2>
      {arquivos.map((arquivo) => (
        <div key={arquivo.id} className="arquivo">
          <a href={arquivo.url} target="_blank" rel="noopener noreferrer">{arquivo.name}</a>
        </div>
      ))}
      <form onSubmit={onNewArquivoSubmit}>
        <input
          type="text"
          placeholder="Nome do arquivo"
          value={newArquivoName}
          onChange={(e) => setNewArquivoName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL do arquivo"
          value={newArquivoUrl}
          onChange={(e) => setNewArquivoUrl(e.target.value)}
          required
        />
        <button type="submit">Criar Arquivo</button>
      </form>
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
