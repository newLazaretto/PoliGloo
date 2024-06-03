import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LoginPage.css';
import '../assets/styles/Loading.css';
import logo from '../assets/images/Logo-horizontal-sem-simbolo.png';
import loadingLogo from '../assets/images/Logo-Vertical.png';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [loading, setLoading] = useState(false); // Estado para controlar a exibição da tela de carregamento

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setLoading(true); // Ativa a tela de carregamento antes de enviar o formulário
      setTimeout(() => {
        onLogin(username, password);
        setLoading(false); // Desativa a tela de carregamento após 3 segundos
      }, 1500);
    } else {
      setFieldsFilled(false);
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nome de usuário ou email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!fieldsFilled && <p>Preencha todos os campos</p>}
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="form-container register-link-container">
        <div className="register-link">
          <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
        </div>
      </div>
      {loading && (
        <div className="loading-overlay">
          <img src={loadingLogo} alt="Carregando" />
          <d>Entrando<span className="dots-container">
        <span className="dots">.</span>
        <span className="dots">.</span>
        <span className="dots">.</span>
      </span></d>
        </div>
      )}
    </div>
  );
};

export default LoginPage;