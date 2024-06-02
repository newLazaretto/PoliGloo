import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Explore from './Explore';
import Communities from './Communities';
import CommunityPage from './CommunityPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const MainContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'false');
  const navigate = useNavigate();
  const location = useLocation();
  const [section, setSection] = useState('');
  const isRootRoute = location.pathname === '/';

  useEffect(() => {
    // Redirect to login if not authenticated and not on the register page
    if (!isAuthenticated && location.pathname !== '/register' && location.pathname !== '/login') {
      navigate('/login');
    }
  }, []);

  const toggleSection = (selectedSection) => {
    setSection((prevSection) => (prevSection === selectedSection ? '' : selectedSection));
  };

  const handleLogin = (username, password) => {
    // Simulação de autenticação
    if (username && password) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/');
    }
  };

  const handleRegister = (fullName, username, password) => {
    // Simulação de cadastro
    if (fullName && username && password) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/');
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          {isRootRoute && <Navbar toggleSection={toggleSection} />}
          <Routes>
            <Route path="/" element={
              section === 'explore' ? <Explore /> :
              section === 'communities' ? <Communities /> : null
            } />
            <Route path="/:communityId" element={<CommunityPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      )}
    </div>
  );
};

export default MainContent;
