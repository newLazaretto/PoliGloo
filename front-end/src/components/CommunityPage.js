// src/components/CommunityPage.js
import React, { useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';

const CommunityPage = ({ communities }) => {
  const { communityId } = useParams();
  const community = communities[communityId];
  const [posts, setPosts] = useState(community.posts);
  const [avisos, setAvisos] = useState(community.avisos);
  const [arquivos, setArquivos] = useState(community.arquivos);

  const addPost = (username, mensagem) => {
    const newPost = {
      id: posts.length + 1,
      username,
      mensagem,
      data_hora: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);
  };

  const addAviso = (title, content) => {
    const newAviso = {
      id: avisos.length + 1,
      title,
      content,
    };
    setAvisos([...avisos, newAviso]);
  };

  const addArquivo = (name, url) => {
    const newArquivo = {
      id: arquivos.length + 1,
      name,
      url,
    };
    setArquivos([...arquivos, newArquivo]);
  };

  if (!community) {
    return <div>Comunidade não encontrada</div>;
  }

  return (
    <div className="community-page">
      <div className="community-header">
        
        <h1>{community.name}</h1>
      </div>
      <div className="community-sections">
        <Link to={`/${communityId}/geral`}>Geral</Link>
        <Link to={`/${communityId}/avisos`}>Avisos</Link>
        <Link to={`/${communityId}/arquivos`}>Arquivos</Link>
      </div>
      <div className="community-content">
        <Routes>
          <Route path="geral" element={
            <div>
              {posts.map(post => (
                <div key={post.id} className="post">
                  <h2>{post.username}</h2>
                  <p>{post.mensagem}</p>
                  <p>{new Date(post.data_hora).toLocaleString()}</p>
                </div>
              ))}
              <h3>Criar novo post</h3>
              <PostForm onAddPost={addPost} />
            </div>
          } />
          <Route path="avisos" element={
            <div>
              {avisos.map(aviso => (
                <div key={aviso.id} className="aviso">
                  <h2>{aviso.title}</h2>
                  <p>{aviso.content}</p>
                </div>
              ))}
              <h3>Criar novo aviso</h3>
              <AvisoForm onAddAviso={addAviso} />
            </div>
          } />
          <Route path="arquivos" element={
            <div>
              {arquivos.map(arquivo => (
                <div key={arquivo.id} className="arquivo">
                  <h2>{arquivo.name}</h2>
                  <a href={arquivo.url} target="_blank" rel="noopener noreferrer">Download</a>
                </div>
              ))}
              <h3>Carregar novo arquivo</h3>
              <ArquivoForm onAddArquivo={addArquivo} />
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

const PostForm = ({ onAddPost }) => {
  const [username, setUsername] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(username, mensagem);
    setUsername('');
    setMensagem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      />
      <button type="submit">Adicionar Post</button>
    </form>
  );
};

const AvisoForm = ({ onAddAviso }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAviso(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do aviso"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Conteúdo do aviso"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Adicionar Aviso</button>
    </form>
  );
};

const ArquivoForm = ({ onAddArquivo }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddArquivo(name, url);
    setName('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do arquivo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL do arquivo"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Carregar Arquivo</button>
    </form>
  );
};

export default CommunityPage;
