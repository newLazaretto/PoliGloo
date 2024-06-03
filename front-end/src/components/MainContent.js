import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Explore from './Explore';
import Communities from './Communities';
import CommunityPage from './CommunityPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const MainContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true' ? true : false);
  const navigate = useNavigate();
  const location = useLocation();
  const [section, setSection] = useState('');
  const isRootRoute = location.pathname === '/';

  useEffect(() => {

    console.log('isAuthenticated:', isAuthenticated);
    console.log('location.pathname:', location.pathname);
    // Redirect to login if not authenticated and not on the register page
    if (!isAuthenticated && !/^\/(register|login)$/.test(location.pathname)) {
      navigate('/login');
    } else if (!isAuthenticated && location.pathname === '/user') {
      // Redirect to login if user tries to access /user while unauthenticated
      navigate('/login');
    } else if (isAuthenticated && /^\/(login|register)$/.test(location.pathname)) {
      // Redirect to root if authenticated and trying to access login or register
      navigate('/');
    }
  }, [isAuthenticated, location.pathname, navigate]);

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

  const handleLogout = () => {
    // Simulate logout by removing auth data
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          {isRootRoute && <Navbar toggleSection={toggleSection} />}
          <button className="logout-button"onClick={handleLogout}>Logout</button>
          <Routes>
            <Route path="/" element={
              section === 'explore' ? <Explore /> :
                section === 'communities' ? <Communities /> : null
            } />
            <Route path="/:communityId/*" element={<CommunityPage />} />
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
