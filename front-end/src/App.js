// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Communities from './components/Communities';
import CommunityPage from './components/CommunityPage';
import './App.css';

function App() {
  const [section, setSection] = useState('');

  const toggleSection = (selectedSection) => {
    setSection((prevSection) => (prevSection === selectedSection ? '' : selectedSection));
  };

  return (
    <Router>
      <div className="App">
       <Navbar toggleSection={toggleSection} />
        <Routes>
          <Route path="/" element={
            section === 'explore' ? <Explore /> :
            section === 'communities' ? <Communities /> : null
          } />
          <Route path="/:communityId" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
