// src/components/MainContent.js
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Explore from './Explore';
import Communities from './Communities';
import CommunityPage from './CommunityPage';

const MainContent = () => {
  const location = useLocation();
  const isRootRoute = location.pathname === '/';
  const [section, setSection] = useState('');

  const toggleSection = (selectedSection) => {
    setSection((prevSection) => (prevSection === selectedSection ? '' : selectedSection));
  };

  return (
    <div className='App'>
      {isRootRoute && <Navbar toggleSection={toggleSection} />}
      <Routes>
        <Route path="/" element={
          section === 'explore' ? <Explore /> :
            section === 'communities' ? <Communities /> : null
        } />
        <Route path="/:communityId" element={<CommunityPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
