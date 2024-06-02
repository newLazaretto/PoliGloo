import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/RegisterPage.css';
import logo from '../assets/images/Logo-horizontal-sem-simbolo.png';
import loadingLogo from '../assets/images/Logo-Vertical.png';

const RegisterPage = ({ onRegister }) => {
  const [registration, setRegistration] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [loading, setLoading] = useState(false); // Estado para controlar a exibição da tela de carregamento

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registration && fullName &&  username && password) {
      setLoading(true); // Ativa a tela de carregamento antes de enviar o formulário
      setTimeout(() => {
        onRegister(registration,fullName, username, password);
        setLoading(false); // Desativa a tela de carregamento após 3 segundos
      }, 1500);
    } else {
      setFieldsFilled(false);
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" />
          <input
            type="text"
            id="register-registratione"
            name="register-registration"
            placeholder="Matrícula"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
            required
          />
          <label htmlFor="register-fullname"></label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label htmlFor="register-username"></label>
          <input
            type="text"
            id="register-username"
            name="register-username"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="register-password"></label>
          <input
            type="password"
            id="register-password"
            name="register-password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!fieldsFilled && <p>Preencha todos os campos</p>}
          <button type="submit">Cadastre-se</button>
        </form>
      </div>
      <div className="form-container register-link-container">
        <div className="register-link">
        <p>Já tem uma conta? <Link to="/login">Login</Link></p>
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
export default RegisterPage;
